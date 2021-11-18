<template>
	<div class="header username-header marauto">
		<ul class="container flex marauto colorf jtf_between h100p">
			<li>
				<!-- <img src="" alt=""> -->
				<div class="cursor logo" @click="$router.push('/')"><img src="/static/images/index/logo.png" /></div>
			</li>
			<li class="flex">
				<div v-if="!userInfo" class="flex">
					<div class="back_home cursor" @click="$router.push('/index')">
						<!-- <svg-icon iconClass="home" /> -->
						<img src="../../../static/images/index/shouye.png" />
						返回首页
					</div>
					<div class="loginbtn cursor" @click="login">登录</div>
				</div>
				<div v-if="userInfo" class="flex">
					<div class="back_home cursor" @click="$router.push('/index')">
						<!-- <svg-icon iconClass="home" /> -->
						<img src="../../../static/images/index/shouye.png" />
						返回首页
					</div>
					<!-- <div class="login cursor">登录</div> -->
					<el-dropdown v-if="currentPath!='/login'" trigger="hover" class="drop center-text" @command="change">
						<span class="el-dropdown-link cursor" @click="info">
							<span v-if="userInfo">{{ userInfo.trueName || userInfo.mobile }}</span>
							<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown" :divided="true" placement="bottom-start">
							<el-dropdown-item command="1" icon="el-icon-setting">设置</el-dropdown-item>
							<el-dropdown-item command="2" icon="el-icon-user">身份切换</el-dropdown-item>
							<el-dropdown-item command="3" icon="el-icon-close">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userInfo: '',
			isShow: true,
			currentPath:''
		};
	},
	// watch: {
	// 	userInfo(newValue, oldValue) {
	// 		if(newValue.trueName){
	// 			this.isShow = true
	// 		}else{
	// 			this.isShow = false
	// 		}
	// 	}
	// },
	created() {
		if (JSON.parse(localStorage.getItem('userInfo'))) {
			this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
		} else {
			this.userInfo = ''
		}
	},
	watch: {
		$route:{
			handler(newValue, oldValue){
				this.currentPath = newValue.path
				if (JSON.parse(localStorage.getItem('userInfo'))) {
					this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
				} else {
					this.userInfo = ''
				}
			},
			deep:true,
			immediate:true
		}
	},
	methods: {
		change(val) {
			if (val == 2) {
				this.$router.push({
					path: '/mine/changeIdentity'
				});
			} else if (val == 1) {
			} else if (val == 3) {
				if (this.userInfo) {
					this.$message({
						message: '退出成功',
						type: 'success'
					});
					this.userInfo = '';
					window.localStorage.removeItem('token');
					window.localStorage.removeItem('userInfo');
					setTimeout(() => {
						this.$router.push({
							path: '/login'
						});
					}, 500);
				}
			}
		},
		info() {
			this.$router.push({
				path: '/mine/index'
			});
		},
		goDetail() {
			this.$router.push({
				path: '/mine'
			});
		},
		//登录
		login() {
			this.$router.push({
				name: 'Login'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	// width: 1440px;
	height: 60px;
	background: #f0f0f0;
	margin: 0 auto;
	.drop {
		width: 150px;
	}
}
.loginbtn {
	width: 82px;
	height: 100%;
	background-color: #ffa800;
	font-size: 16px;
	text-align: center;
	color: #ffffff;
}
.header > .container {
	// max-width: 1200px;
	width: 100%;
	padding-left: 20px;
	line-height: 60px;
	.logo {
		width: 130px;
		height: 100%;
		display: flex;
		align-items: center;
		img {
			width: 100%;
			height: 38px;
		}
	}
	.back_home {
		margin-right: 30px;
		color: #525252;
		img {
			margin-right: 5px;
		}
	}

	.login {
		padding: 0 25px;
		background: #ffba00;
	}
	// padding: 0 30px;
}
</style>
<style lang="scss"></style>
