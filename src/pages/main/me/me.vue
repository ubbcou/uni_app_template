<template>
  <view class="content">
    <view
      class="block"
      @click="goSomePage(0)"
    >
      子页面 - 个人信息
    </view>
    <view class="block" @click="goSomePage(1)">
      更多子页面 - 协议信息
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Me ee',
    }
  },
  onLoad() {

  },
  methods: {
    goSomePage(index) {
      const theEnum = [
        '/pages/sub/user/user',
        '/pages/extra/protocol/protocol',
      ]
      this.$uni.navigate(theEnum[index])
    },
  },
}
</script>

<style scoped>
.block {
  height: 320rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12rpx;
  margin: 32rpx;
}
.block:nth-of-type(1) {
  background-color: antiquewhite;
}
.block:nth-of-type(2) {
  background-color: rgb(215, 250, 242);
}
</style>
