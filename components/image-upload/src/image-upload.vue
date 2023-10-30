<script lang="ts" setup>
import TnIcon from '../../icon/src/icon.vue'
import { useNamespace } from '../../../hooks'
import { imageUploadEmits, imageUploadProps } from './image-upload'
import { useImageUpload } from './composables'

const props = defineProps(imageUploadProps)
defineEmits(imageUploadEmits)

const ns = useNamespace('image-upload')
const nsItem = useNamespace('image-upload-item')

const {
  fileList,
  isExceedMaxCount,
  chooseFile,
  retryUploadFile,
  retryAllUpload,
  customUploadHandle,
  removeFileEvent,
  clearAllFile,
  previewImage,
} = useImageUpload(props)

defineExpose({
  /**
   * @description 手动选择文件
   */
  chooseFile,
  /**
   * @description 手动上传图片
   */
  upload: customUploadHandle,
  /**
   * @description 重新上传失败的文件
   */
  retry: retryAllUpload,
  /**
   * @description 清空所有文件
   */
  clear: clearAllFile,
})
</script>

<template>
  <view :class="[ns.b()]">
    <!-- 上传列表 -->
    <view
      v-for="(item, index) in fileList"
      :key="index"
      :class="[nsItem.b(), nsItem.is('custom', !!$slots.uploadImage)]"
    >
      <slot name="uploadImage" :data="item">
        <!-- 已上传图片 -->
        <view
          class="tn-gray-light_bg"
          :class="[
            nsItem.e('image'),
            nsItem.is('finish', item.status === 'done'),
          ]"
          @tap.stop="previewImage(index)"
        >
          <image class="image" :src="item.url" mode="aspectFill" />
        </view>
        <!-- 删除按钮 -->
        <view
          v-if="showRemove && !disabled"
          :class="[nsItem.e('remove')]"
          @tap.stop="removeFileEvent(index)"
        >
          <view :class="[nsItem.em('remove', 'icon')]">
            <TnIcon name="close-fill" />
          </view>
        </view>
        <!-- 重试蒙层 -->
        <view
          v-if="item.status === 'failed' && !disabled"
          :class="[nsItem.e('retry')]"
          @tap.stop="retryUploadFile(index)"
        >
          <TnIcon name="refresh-simple" />
        </view>
        <!-- 进度波浪 -->
        <!-- 进度0 ~ 100 => -300 ~ -400 -->
        <view
          v-if="
            showUploadProgress &&
            item.progress > 0 &&
            item.progress < 100 &&
            !disabled
          "
          :class="[
            nsItem.e('progress'),
            nsItem.is('finish', item.progress === 100),
          ]"
        >
          <view
            :class="[nsItem.em('progress', 'wave')]"
            :style="{ top: `${-300 - item.progress}%` }"
          />
          <view
            :class="[nsItem.em('progress', 'wave')]"
            :style="{ top: `${-300 - item.progress}%` }"
          />
        </view>
      </slot>
    </view>
    <!-- 上传按钮 -->
    <template v-if="!isExceedMaxCount && !disabled">
      <slot name="uploadBtn">
        <view
          class="tn-gray-light_bg tn-gray-disabled_text"
          :class="[nsItem.b()]"
          @tap.stop="chooseFile"
        >
          <view :class="[nsItem.e('add-btn')]">
            <slot name="addBtn">
              <view :class="[nsItem.em('add-btn', 'icon')]">
                <TnIcon name="add-fill" />
              </view>
            </slot>
          </view>
        </view>
      </slot>
    </template>
  </view>
</template>

<style lang="scss" scoped>
@import '../../../theme-chalk/src/image-upload.scss';
</style>
