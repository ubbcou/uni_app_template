<template>
  <view class="page">
    <view class="store">
      <view class="store-item">
        <view class="store-label">
          STATUS_BAR_HEIGHT：
        </view>
        <view class="store-value">
          {{ STATUS_BAR_HEIGHT }}
        </view>
      </view>
      <view class="store-item">
        <view class="store-label">
          SCREEN_HEIGHT：
        </view>
        <view class="store-value">
          {{ SCREEN_HEIGHT }}
        </view>
      </view>
      <view class="store-item">
        <view class="store-label">
          SCREEN_WIDTH：
        </view>
        <view class="store-value">
          {{ SCREEN_WIDTH }}
        </view>
      </view>
    </view>
    <view class="list flex-center">
      <view
        v-for="o in list"
        :key="o"
        class="item flex-center"
        :style="{ background: o }"
        @click="test"
      >
        {{ o }}
      </view>
    </view>
  </view>
</template>

<script>
import { mapGetters } from 'vuex'
import { demo } from '@/api/test'

export default {
  data: () => ({
    list: [
      'var(--cl-main)',
      'var(--cl-sub)',
      'var(--cl-111)',
      'var(--cl-222)',
      'var(--cl-333)',
      'var(--cl-444)',
      'var(--cl-444)',
      'var(--cl-555)',
      'var(--cl-666)',
      'var(--cl-777)',
      'var(--cl-888)',
      'var(--cl-999)',
    ],
  }),
  onLoad() {
    this.test()
  },
  computed: {
    ...mapGetters({
      STATUS_BAR_HEIGHT: 'system/STATUS_BAR_HEIGHT',
      SCREEN_HEIGHT: 'system/SCREEN_HEIGHT',
      SCREEN_WIDTH: 'system/SCREEN_WIDTH',
    }),
  },
  methods: {
    async test() {
      await demo()
    },
  },
}
</script>

<style scoped>
.list {
  flex-wrap: wrap;
}
.item {
  height: 60rpx;
  border-radius: 12rpx;
  margin: 24rpx;
  width: 40vw;
  height: 30vw;
  color: #fff;
  text-align: center;
  background-color: var(--cl-main);
}
.store-item {
  padding: 0 40rpx;
  display: flex;
}
</style>
