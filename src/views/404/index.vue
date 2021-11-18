<template>
	<div class="error404">
		<div class="bg404"></div>
		<div class="btns flex">
			<el-button class="btn" @click="reload">刷新页面</el-button>
			<el-button class="btn" @click="goHome">返回首页</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name:'error404',
	data(){
		return {
			oldPath:''
		}
	},
	watch:{
		$route:{
			handler(val){
				this.oldPath = val.redirectedFrom
			},
			immediate: true,
			deep:true
		}
	},
	methods:{
		reload(){
			let num = Math.random()
			this.$router.push({
				path:""+this.oldPath+"&num="+num
			})
		},
		goHome(){
			this.$router.push({
				path:'/index'
			})
		}
	}
}
</script>

<style scoped lang="scss">
.error404{
	min-width: 1200px;
}
.bg404{
	min-width: 1200px;
	min-height: 600px;
	background-color: #fff;
	background: url('../../../static/images/404.png') center center /540px no-repeat;
	
}
.btns{
	width: 260px;
	height: 50px;
	margin: 20px auto;
	justify-content: space-between;
	.btn{
		width: 120px;
		height: 40px;
		background-color: #FFBA00;
		border-radius: 20px;
		color: #fff;
		&:last-child{
			background-color: transparent;
			border-color: #FFBA00;
			color: #FFBA00;
		}
	}
}
</style>
