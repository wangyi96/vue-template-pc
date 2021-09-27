<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  created() {
    // 在页面加载时读取sessionStorage里的状态信息
    if (this.$methods.getSessionStorage("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(this.$methods.getSessionStorage("store"))))
    }

    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", ()=> {
      console.log(this.$store.state)
      this.$methods.setSessionStorage("store", JSON.stringify(this.$store.state))
    })
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
