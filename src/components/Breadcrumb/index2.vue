<template>
  <div>
    <div class="fl font14 address">我的位置：</div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="cursor" v-for="(item,index) in levelList"
                          :key="index">
        <a class="cursor" @click.prevent="handleLink(item)">{{ item.title }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      this.levelList = this.$route.meta.levelList
    },
    handleLink (item) {
      if (item.path != this.$route.path) {
        this.$router.push(item.path)
      }
    }
  }
}
</script>

<style scoped>
.address {
  line-height: 1;
}
</style>
