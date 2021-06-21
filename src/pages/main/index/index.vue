<template>
  <view class="list flex-center">
    <view
      v-for="o in list"
      :key="o"
      class="item flex-center"
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
</style>
