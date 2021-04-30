<template>
  <button style="margin: 120rpx;" @click="login">登录</button>
</template>

<script>
import { locToken } from '@/sdk/local'

export default {
  name: 'PageLogin',
  data: () => ({
    path: '',
  }),
  onLoad(opt) {
    this.path = decodeURIComponent(opt.path)
  },
  methods: {
    async login() {
      locToken.set('token value')
      this.$uni.back(1, {
        success: () => {
          this.$uni.redirect(this.path, {
            fail: () => {
              this.$uni.launch(this.path)
            },
          })
        },
      })
    },
  },
}
</script>
