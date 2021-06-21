<template>
  <button
    style="margin: 120rpx;"
    @click="login"
  >登录</button>
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
      this.$nav.back(1, {
        success: () => {
          this.$nav.redirect(this.path, {
            fail: () => {
              this.$nav.launch(this.path)
            },
          })
        },
      })
    },
  },
}
</script>
