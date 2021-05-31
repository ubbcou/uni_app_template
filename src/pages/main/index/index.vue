<template>
  <view class="list">
    <view
      v-for="o in list"
      :key="o"
      class="item"
      :style="{ background: o }"
      @click="test"
    >{{ o }}</view>
  </view>
</template>

<script>
import { demo } from '@/api/test'

export default {
  data: () => ({
    list: [
      'var(--cl-main)',
      'var(--cl-sub)',
      'var(--cl-g1)',
      'var(--cl-g2)',
      'var(--cl-g3)',
      'var(--cl-g4)',
      'var(--cl-g4)',
      'var(--cl-g5)',
      'var(--cl-g6)',
      'var(--cl-g7)',
      'var(--cl-g8)',
      'var(--cl-g9)',
    ],
  }),
  methods: {
    async test() {
      await demo()
    },
  },
}
</script>

<style scoped>
.item {
  height: 60rpx;
  margin: 20rpx;
  border-radius: 12rpx;
  color: #fff;
  text-align: center;
  background-color: var(--cl-main);
}
</style>
