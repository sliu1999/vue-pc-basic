<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	body{
    overflow-y: auto !important;
    padding-right:0 !important;
  }
  .el-dialog{
    min-width: 700px;
  }
</style>
