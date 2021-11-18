<template>
  <div class="app-wrapper">
    <div class="main-container">
      <app-header v-if="!userCenter"/>
      <app-main />
      <app-footer v-if="routerPath!='/index' && !userCenter"/>
    </div>
  </div>
</template>

<script>
import { AppHeader, AppFooter, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

  methods: {
      
  },
  data(){
    return{
      routerPath:'',
	  userCenter:false
    }
  },
  watch: {
    $route: {
    handler: function(val, oldVal){
      this.routerPath = val.path
	  if (val.path.substring(0,5) == '/mine') {
	  	this.userCenter = true
	  }else{
		this.userCenter = false
	  }
    },
    // 深度观察监听
    deep: true,
     // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
    immediate: true
  }
}
}
</script>

<style lang="scss" scoped>
.main-container{
	width: 100%;
	min-width: 1200px;
 
}
.app-wrapper{
  overflow-x: auto;
  overflow-y: hidden;
}

</style>
