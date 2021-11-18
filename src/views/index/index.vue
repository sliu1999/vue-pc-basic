<template>
	<div class="indexpage">
		<div class="header">
			<div class="flex al_center jtf_between">
				<img src="/static/images/index/logo.png" />
				<div v-if="!userInfo" class="loginbtn cursor" @click="login">登录</div>
				<div v-else class="loginbtn cursor logined" @click="goDetail">{{ userInfo.trueName || userInfo.mobile }}</div>
			</div>
		</div>
		<el-carousel  direction="vertical" :autoplay="false" ref="carousel2" :loop="false" class="elcarousel" @change="curChange" trigger="click">
			<el-carousel-item >
				<div class="index1" :class="{'activeCur':firstCur}">
					<div class="container clearfix" style="height: 100%;">
						<div class="index1_left">
							<h1 class="title">苏垦农服·全农服务</h1>
							<!-- <div class="content font18">{{ pageData.introduceContent }}</div> -->
							<div class="tip font18 center-text">更多服务请扫码下载：苏垦农服APP</div>
							<div class="bottom center-text">
								<div class="img">
									<img class="img" :src="fileUrl + qrcode" />
								</div>
								
								<div class="button flex jtf_between">
									<div class="item flex" >
										<div class="item_left flex al_center jtf_center">
											<img src="../../../static/images/index/pingguo.png" />
										</div>
										<div class="item_right" @click="changeQr('app')">APP下载</div>
									</div>
									<!-- <div class="item flex" @click="linkanzhuo()">
										<div class="item_left flex al_center jtf_center"><img src="../../../static/images/index/anzhuo.png" /></div>
										<div class="item_right">Android 版下载</div>
									</div> -->
									<div class="item flex" >
										<div class="item_left flex al_center jtf_center"><img src="../../../static/images/index/xiaochengxu.png" /></div>
										<div class="item_right" @click="changeQr('wx')">小程序</div>
									</div>
								</div>
							</div>
						</div>
						<div class="index1_right" ref="index1_right" ><img src="../../../static/images/index/phone.png" /></div>
					</div>
				</div>
			</el-carousel-item>
			<el-carousel-item>
				<div class="index2" :class="{'activeCur':currentId==1}">
					<div class="container flex">
						<div class="index2_left">
							<!-- <div class="title">苏垦农服</div> -->
							<div class="title">服务覆盖全江苏</div>
							<!-- <div class="subtitle">{{ mapData.companyName }}</div>
							<div class="content">{{ mapData.companyDesc }}</div> -->
							<div class="content">{{ pageData.introduceContent }}</div>
							<!-- <div class="content">苏垦农服社会化平台，由江苏农垦农业服务有限公司运营，是国内领先的互联网+农资+农机+农金+订单农业与农业托管和农业B2C产业互联网平台。目前，平台囊括农资、农技、农机、农金和订单农业与农业托管五大类目，是农业规模种植户和经销商的必备工具。</div> -->
							<img src="../../../static/images/index/circle.png" />
						</div>
						<div class="index2_right">
							<!-- <img src="../../../static/images/index/map.png" /> -->
							<companyMap @message="detail"></companyMap>
						</div>
					</div>
				</div>
			</el-carousel-item>
			<el-carousel-item>
				<div class="index3">
					<div class="container">
						<div class="title">贯穿作业每个环节</div>
						<div class="index3-detail relative" :class="{'active':currentId==2}">
							<div class="heng"></div>
							<div class="flex absolute step1 step" style="height: 240px;">
								<div class="zhanwei"></div>
								<div class="font20 fontweight" style="width: 20px;color: #17B455;line-height:20px">承包土地</div>
								<ul class="font14" style="color: #737373;height: 55px;margin-top: 15px;margin-left: 20px;">
									<li>•  农业金融</li>
									<li style="margin-top: 5px;">•  订单农业</li>
									<li style="margin-top: 5px;">•  农业托管</li>
								</ul>
							</div>
							<div class="flex absolute step2 step" style="height: 240px;">
								<div class="zhanwei"></div>
								<div class="font20 fontweight" style="width: 20px;color: #45B139;line-height:20px">购生产资料</div>
								<ul class="font14" style="color: #737373;height: 55px;margin-top: 25px;margin-left: 20px;">
									<li>•  农资商城</li>
									<li style="margin-top: 5px;">•  农业金融</li>
									<li style="margin-top: 5px;">•  农业技术</li>
								</ul>
							</div>
							<div class="flex absolute step3 step" style="height: 240px;">
								<div class="zhanwei"></div>
								<div class="font20 fontweight" style="width: 20px;color: #70B33C;line-height:20px">田间管理</div>
								<ul class="font14" style="color: #737373;height: 55px;margin-top: 15px;margin-left: 20px;">
									<li>•  农资商城</li>
									<li style="margin-top: 5px;">•  农业金融</li>
									<li style="margin-top: 5px;">•  农业技术</li>
								</ul>
								<ul class="font14" style="color: #737373;height: 55px;margin-top: 15px;margin-left: 20px;">
									<li>•  农业机械</li>
									<li style="margin-top: 5px;">•  订单农业</li>
									<li style="margin-top: 5px;">•  农业托管</li>
								</ul>
							</div>
							<div class="flex absolute step4 step" style="height: 240px;">
								<div class="zhanwei"></div>
								<div class="font20 fontweight" style="width: 20px;color: #A3BD1E;line-height:20px">收获证书</div>
								<ul class="font14" style="color: #737373;height: 55px;margin-top: 15px;margin-left: 20px;">
									<li>•  农业机械</li>
									<li style="margin-top: 5px;">•  农业金融</li>
									<li style="margin-top: 5px;">•  农业技术</li>
								</ul>
								<ul class="font14" style="color: #737373;height: 55px;margin-top: 15px;margin-left: 20px;">
									<li>•  订单农业</li>
									<li style="margin-top: 5px;">•  农业托管</li>
								</ul>
							</div>
							<div class="flex absolute step5 step" style="height: 240px;">
								<div class="zhanwei"></div>
								<div class="font20 fontweight" style="width: 20px;color: #E4AC03;line-height:20px">销售环节</div>
								<ul class="font14" style="color: #737373;height: 55px;margin-top: 28px;margin-left: 20px;">
									<li>•  订单农业</li>
									<li style="margin-top: 5px;">•  农业托管</li>
								</ul>
							</div>
							<div class=" absolute step6" style="height: 34px;">
								
							</div>
						</div>
						<!-- <div class="content">
							为创新农业服务理念，延伸服务内容，满足农户对农技农资的需求，提高苏垦农服公司的市场竞争力及影响力。苏垦农服为种植大户提供信息，为生产
							技术提供帮助，为种植大户提供“产、供、销”一条龙服务，充分发挥苏垦农服品牌效应，展现苏垦农服全新的服务理念，助力种植大户生产夺丰收。
						</div>
						<div class="process">
							<div class="top flex jtf_between">
								<div class="item flex al_center">
									<div class="leftImg">产前</div>
									<div class="rightText">
										<div class="right_title">农作物产前期</div>
										<div class="right_content">
											产前的生产资料供应（种子、化肥、农药、薄膜等）。扩大苏垦农服的品牌效应，履行社会责任，带动现代农业发展，发挥行业排头兵的作用。
										</div>
									</div>
								</div>
								<div class="item flex">
									<div class="leftImg">产后</div>
									<div class="rightText">
										<div class="right_title">农作物产后期</div>
										<div class="right_content">
											产后的销售、运输、加工等服务。扩大苏垦农服的品牌效应，履行社会责任，带动现代农业发展，发挥行业排头兵的作用。
										</div>
									</div>
								</div>
							</div>
							<div class="middle_line flex al_center jtf_between">
								<img src="../../../static/images/index/smgrn.png" class="circle" />
								<img src="../../../static/images/index/greLine.png" class="line" />
								<img src="../../../static/images/index/smyel.png" class="circle" />
								<img src="../../../static/images/index/yelLine.png" class="line" />
								<img src="../../../static/images/index/smgrn.png" class="circle" />
								<img src="../../../static/images/index/greLine.png" class="line" />
								<img src="../../../static/images/index/smgrn.png" class="circle" />
							</div>
							<div class="bottom">
								<div class="item flex al_center">
									<div class="leftImg">产中</div>
									<div class="rightText">
										<div class="right_title">农作物产中期</div>
										<div class="right_content">
											产中的耕种技术、栽培技术、病虫害防治技术等等技术服务。扩大苏垦农服的品牌效应，履行社会责任，带动现代农业发展，发挥行业排头兵的作用。
										</div>
									</div>
								</div>
							</div>
						</div> -->
					</div>
				</div>
			</el-carousel-item>
			<el-carousel-item>
				<div class="index4" :class="{'activeCur':currentId==3}">
					<div class="container">
						<div class="flex fl_wrap itemsbox" v-if="moduleList">
							<router-link :to="item.url" tag="div" class="item cursor" v-for="(item, index) in moduleList" :key="index" style="margin-right: 30px;" >
								<div class="itemChild" >
									<div class="itemcontent">
										<img :src="fileUrl + item.menuPicPath" />
										<div class="name">{{ item.menuNameChinese }}</div>
										<div class="english">{{ item.menuNameEnglish }}</div>
									</div>
								</div>
							</router-link>
						</div>
					</div>
				</div>

					<!-- <footerComponents></footerComponents> -->
					<div class="footer center colorf">
						<section class="center borderbox h100p">
							<div class="container  center jtf_between">
								<ul class="topUl">
									<li v-for="(title,index) in titList2" :key="index" @click="linkTo(title)">{{title.title}}</li>
									
								</ul>
								<div class="list">
									<dl class="listdl">
										<dt>苏垦农服·全农服务</dt>
										<dd class="font14">
											苏垦农服社会化平台，由江苏农垦农业服务有限公司运营
										</dd>
										<dd class="font14">
											是国内领先的互联网+农资+农机+农金+订单农业与农业托管和农业B2C产业互联网平台
										</dd>
										<dd class="font14">
											目前，平台囊括农资、农技、农机、农金和订单农业与农业托管五大类目
										</dd>
										<dd class="font14">
											是农业规模种植户和经销商的必备工具
										</dd>
									</dl>
									<dl class="listdl2">
										<dt>全国客服电话</dt>
										<div style="font-size: 24px;margin-bottom: 10px;">400-1689-990</div>
										<dd class="font16">
											<img src="/static/images/index/address.png" />
											<span>地址：江苏省南京市建邺区恒山路苏垦大厦8楼</span>
										</dd>
										<dd class="font16">
											<img src="/static/images/index/phone.png" />
											<span>传真：0537-54886688</span>
										</dd>
										<dd class="font16">
											<img src="/static/images/index/email.png" />
											<span>邮箱：suken@193.com</span>
										</dd>
									</dl>
								</div>

							</div>
							<div class="bottom font14 center-text">Copyright@2019 苏垦农服农业社会化平台 <a href="http://www.beian.miit.gov.cn" target="_blank">苏ICP备20024921号-1</a></div>
						</section>
					</div>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
import homeApi from '@/api/index/index';
import companyMap from './components/map.vue';
import footerComponents from '../../layout/components/AppFooter.vue';
export default {
	name: 'Index',
	components: {
		companyMap,footerComponents
	},
	data() {
		return {
			height: '',
			currentId: 0,
			firstCur:false,
			Cur4Over:null,
			mouseOver:false,
			qrcode:'',
			pageData: {
				introduceTitle: '',
				introduceContent: '',
				qrCodeUrl: '',
				iosDownloadUrl: '',
				androidDownloadUrl: '',
				wechatUrl: ''
			},
			mapData: {
				companyName: '',
				companyDesc: ''
			},
			userInfo: null,
			titList: [
				{
					title: '农资商城',
					path: 'Mall'
				},{
					title: '农机服务',
					path: 'njService'
				},{
					title: '农技服务',
					path: 'techService'
				},
				{
					title: '农金服务',
					path: 'finance'
				},
				{
					title: '订单农业',
					path: 'OrderFarming'
				},
				{
					title: '农业托管',
					path: 'OrderFarming'
				},
					{
						title: '加入我们',
						path: ''
					}
			],
			titList2: [{
						title: '农资商城',
						path: 'Mall'
					},
					
					{
						title: '农机服务',
						path: 'NjService'
					},{
						title: '农技服务',
						path: 'TechService'
					},
					{
						title: '农金服务',
						path: 'Finance'
					},
					
					{
						title: '供需中心',
						path: 'OrderFarming'
					},
					
					// {
					// 	title: '农业托管',
					// 	path: 'OrderFarming'
					// },
					{
						title: '加入我们',
						path: 'AddUs'
					}
				],
			moduleList: [
				{
					menuPicPath: '../../../static/images/index/nzsc.png',
					menuNameChinese: '农资商城',
					menuNameEnglish: 'Agricultural commodities mall',
					path: 'Mall'
				},
				{
					menuPicPath: '../../../static/images/index/njzx.png',
					menuNameChinese: '农技资讯',
					menuNameEnglish: 'Agricultural information',
					path: 'techService'
				},
				{
					menuPicPath: '../../../static/images/index/zjwd.png',
					menuNameChinese: '专家问答',
					menuNameEnglish: 'Expert questions and answers',
					path: 'expert'
				},
				{
					menuPicPath: '../../../static/images/index/njxy.png',
					menuNameChinese: '苏垦学院',
					menuNameEnglish: 'College of Agricultural Technology',
					path: 'school'
				},
				{
					menuPicPath: '../../../static/images/index/njfw.png',
					menuNameChinese: '农机服务',
					menuNameEnglish: 'Agricultural machinery service',
					path: 'njService'
				},
				{
					menuPicPath: '../../../static/images/index/ddny.png',
					menuNameChinese: '订单农业',
					menuNameEnglish: 'Order farming',
					path: 'OrderFarming'
				},
				{
					menuPicPath: '../../../static/images/index/nytg.png',
					menuNameChinese: '农业托管',
					menuNameEnglish: 'Agricultural trusteeship',
					path: 'OrderFarming'
				},
				{
					menuPicPath: '../../../static/images/index/nyjr.png',
					menuNameChinese: '农业金融',
					menuNameEnglish: 'agricultural finance',
					path: 'finance'
				}
			]
		};
	},
	created() {
		if (JSON.parse(localStorage.getItem('userInfo'))) {
			this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
		} else {
			this.userInfo = null;
			this.titList2.forEach((item,index)=>{
				if(item.title == '农金服务'){
					this.titList2.splice(index,1)
				}
			})
			// this.titList2.splice(1,1)
		}
		
		
		this.init();
		this.getmoduleList();
		this.detail();
		this.animate()
	},
	mounted(){
		
	},
	methods: {
		// 切换二维码
		changeQr(flag){
			if(flag=="app"){
				this.qrcode = this.pageData.qrCodeUrl
			}else{
				this.qrcode = '/wxcode/wx.png'
			}
		},
		// 动画特效
		animate(){
			// 首屏动画
			setTimeout(()=>{
				this.firstCur = true
			},300)
			

		},
		// 幻灯片切换回调
		curChange(val){
			this.currentId = val
			if(val==0){
				this.firstCur = true
			}else{
				this.firstCur = false
			}
		},
		detail(data) {
			this.mapData = data || {};
			console.log(this.mapData,'this.mapData');
		},
		//首页内容
		init() {
			homeApi.homepage().then(res => {
				console.log(233);
				console.log(JSON.stringify(res));
				this.pageData = res.data[0] || {};
				this.qrcode = this.pageData.qrCodeUrl
			});
		},
		//下载
		linkios() {
			window.location.href = this.pageData.iosDownloadUrl;
		},
		linkanzhuo() {
			window.location.href = this.pageData.androidDownloadUrl;
		},
		linkwechat() {
			window.location.href = this.pageData.wechatUrl;
		},
		async getmoduleList() {
			let obj = {};
			const { data } = await homeApi.tabBox(obj);
			console.log(data);
			this.moduleList = data || [];
			if(!this.userInfo){
				this.moduleList.splice(7,1)
			}
		},
		//切换栏目
		changeSel(id) {
			if(this.$refs.carousel2){
				this.$refs.carousel2.setActiveItem(id);
			}
			
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
		},
		linkTo(item) {
			this.$router.push({
				name: item.path
			});
		},
		footerlinkTo(item) {
			this.$router.push({
				name: item.path
			});
		},
		//函数防抖
		debounce(func, wait) {
			let timeout;
			return function() {
				let context = this;
				let args = arguments;
				if (timeout) clearTimeout(timeout);
				timeout = setTimeout(() => {
					func.apply(context, args);
				}, wait);
			};
		},
		//判断滚动方向
		handleScroll(e) {
			// console.log(e);
			// console.log(e.detail);
			let direction;
			if (e.wheelDelta) {
				direction = e.wheelDelta > 0 ? 'up' : 'down';
			} else if (e.detail) {
				direction = e.detail > 0 ? 'down' : 'up';
			}

			if (this.currentId <= 0) {
				direction == 'down' ? this.currentId++ : (this.currentId = 0);
			} else if (this.currentId >= 3) {
				direction == 'down' ? (this.currentId = 3) : this.currentId--;
			} else {
				direction == 'down' ? this.currentId++ : this.currentId--;
			}
			// console.log(this.currentId)
			this.changeSel(this.currentId);
		},
		
	},
	mounted() {
		this.height = document.body.clientHeight;
		//监听鼠标滚动事件
		window.addEventListener('mousewheel', this.debounce(this.handleScroll, 300), true) ||
			window.addEventListener('DOMMouseScroll', this.debounce(this.handleScroll, 300), false);
	}
};
</script>

<style lang="scss" scoped>
.indexpage{
	width:100%;
}
.header {
	position: absolute;
	top: 0;
	height: 60px;
	background: linear-gradient(0deg, rgba(51, 51, 51, 0.3) 0%, rgba(77, 77, 77, 1) 100%);
	box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.07);
	width: 100%;
	z-index: 4;

	> div {
		// max-width: 1200px;
		width:100%;
		height: 60px;
		line-height: 60px;
		margin: 0 auto;
	}

	img {
		width: 135px;
		height: 40px;
		margin-left: 20px;
	}

	.loginbtn {
		padding: 0 20px;
		// width: 82px;
		height: 100%;
		background-color: #ffa800;
		font-size: 16px;
		text-align: center;
		color: #ffffff;
		&.logined{
			background-color: transparent;
			// text-decoration: underline;
			color: #e3e3e3;
			&:hover{
				color: #28cc8a;
			}
		}
	}
}
.container{
	max-height: 1000px;
	padding-top: 60px;
}

.index1 {
	height: 100%;
	color: #fff;
	background-image: url(../../../static/images/index/bg.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	padding-top: 6%;
	.container{
		position: relative;
		overflow: visible;
	}
	.index1_left {
		width: 600px;
		float: left;
	
		.title {
			font-size: 72px;
			font-weight: bold;
			// line-height:88px;
			margin-bottom: 70px;
			margin-top: -100px;
		}

		.content {
			text-indent: 2em;
			line-height: 30px;
			font-weight: 500;
			margin-bottom: 20px;
		}

		.tip {
			color: #ededed;
			margin-bottom: 30px;
		}

		.bottom {
			.img{
				margin: 0 auto;
				width: 300px;
				height: 300px;
				border-radius: 10px;
				background-color: #fff;
				margin-bottom: 20px;
				> img {
					width: 260px;
					height: 260px;
					margin: 20px;
				}
			}
			

			.button {
				height: 170px;
				width:350px;
				margin: 0 auto;
				.item {
					height: 50px;
					border-radius: 5px;
					overflow: hidden;
					box-shadow: 0px 10px 40px 0px rgba(30, 72, 59, 0.25);
					cursor:pointer;
					.item_left {
						background-color: #28cc8a;
						width: 50px;
						height: 100%;

						img {
							width: 40px;
							height: 40px;
						}
					}

					.item_right {
						background-color: #ffffff;
						color: #000000;
						font-size: 20px;
						padding: 0 20px;
						line-height: 50px;
						border-radius: 0 5px 5px 0;
					}
				}
			}
		}
	}

	.index1_right {
		// float: left;
		position: absolute;
		left: 1200px;
		flex: 1;
		height: 720px;
		width:600px;
		// margin-left: 700px;
		opacity: 0;
		transition:all 1s ease;
		-webkit-transition: all 1s ease; /* Safari 和 Chrome */
		-o-transition: all 1s ease; /* Opera */
		img {
			width: 100%;
			height: 100%;
		}
	}
	&.activeCur{
		.index1_right {
			// margin-left: 0;
			left: 600px;
			opacity: 1;
			// transition:all 1s;
			// -webkit-transition: all 1s; /* Safari 和 Chrome */
			// -o-transition: all 1s; /* Opera */
		}
		.title{
			margin-top: 0;
			transition:all 1s ease;
			-webkit-transition: all 1s ease; /* Safari 和 Chrome */
			-o-transition: all 1s ease; /* Opera */
		}
	}
}

.index2 {
	height: 100%;
	color: #fff;
	background-image: url(../../../static/images/index/bg2.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	padding-top: 6%;

	.index2_left {
		width: 50%;

		.title {
			color: #066716;
			font-size: 72px;
			font-weight: bold;
			opacity: 0;
		}

		.subtitle {
			color: #ff6000;
			font-size: 30px;
			font-weight: 500;
			margin: 20px 0;
		}

		.content {
			color: #112c16;
			font-size: 18px;
			line-height: 30px;
			margin: 40px 0 20px 0;
		}
		img{
			width: 482px;
			height: 480px;
			transform:rotate(-45deg);
			transition:all 1s ease;
			-webkit-transition: all 1s ease; /* Safari 和 Chrome */
			-o-transition: all 1s ease; /* Opera */
		}
	}

	.index2_right {
		width: 609px;
		max-height: 800px;
		background-image: url('/static/images/index/mapBg.png');
		background-size: 640px auto;
		background-repeat: no-repeat;
		background-position: -40px 20px;
		> img {
			width: 100%;
			height: 100%;
		}
	}
	&.activeCur{
		.index2_left{
			img{
				transform:rotate(0);
			}
			.title{
				opacity: 1;
			}
		}
	}
}

.index3 {
	height: 100%;
	color: #fff;
	background-image: url(../../../static/images/index/bg3.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	padding-top: 6%;

	.title {
		font-size: 72px;
		font-weight: bold;
		line-height: 88px;
		color: #066716;
		// text-shadow: 0px 17px 6px rgba(1, 58, 24, 1);
		text-align: center;
		margin-bottom: 10%;
	}
	.index3-detail{
		width: 100%;
		height: 418px;
	// 	background-image: url(../../../static/images/index/detail.png);
	// 	background-repeat: no-repeat;
	// 	background-size: 100% 100%;
		.heng{
			width: 1200px;
			height: 9px;
			position: absolute;
			top: 180px;
			left: -500px;
			background-image:url('/static/images/index/heng.png');
			background-size: 100% 100%;
			opacity: 0;
			
		}
		.flex{
			width: 180px;
			.zhanwei{
				width: 70px;
			}
		}
		.step1{
			left: -35px;
			top: -110px;
			background-image: url('/static/images/index/step1.png');
			background-size: 120px 240px;
			background-repeat: no-repeat;
			width: 180px;
			padding-top: 90px;
			opacity: 0;
		}
		.step2{
			left: 190px;
			top: 263px;
			background-image: url('/static/images/index/step2.png');
			background-size: 120px 240px;
			background-repeat: no-repeat;
			width: 180px;
			padding-top: 33px;
			opacity: 0;
		}
		.step3{
			left: 420px;
			top: -110px;
			background-image: url('/static/images/index/step3.png');
			background-size: 120px 240px;
			background-repeat: no-repeat;
			width: 275px;
			padding-top: 90px;
			opacity: 0;
		}
		.step4{
			left: 650px;top: 263px;
			background-image: url('/static/images/index/step4.png');
			background-size: 120px 240px;
			background-repeat: no-repeat;
			width: 275px;
			padding-top: 33px;
			opacity: 0;
		}
		.step5{
			left: 883px;top: -110px;
			background-image: url('/static/images/index/step5.png');
			background-size: 120px 240px;
			background-repeat: no-repeat;
			width: 180px;
			padding-top: 90px;
			opacity: 0;
		}
		.step6{
			left: 1167px;top: 67px;
			background-image: url('/static/images/index/step6.png');
			background-size: 34px 34px;
			background-repeat: no-repeat;
			width: 34px;
			opacity: 0;
		}
		.heng,.step{
			transition:all 1.5s ease;
			-webkit-transition: all 1.5s ease; /* Safari 和 Chrome */
			-o-transition: all 1.5s ease; /* Opera */
		}
		&.active{
			.heng{
				top: 180px;
				left: 0;
				opacity: 1;
			}
			.step1{
				left: -35px;
				top: -10px;
				opacity: 1;
			}
			.step2{
				left: 190px;
				top: 163px;
				opacity: 1;
			}
			.step3{
				left: 420px;
				top: -10px;
				opacity: 1;
			}
			.step4{
				left: 650px;top: 163px;
				opacity: 1;

			}
			.step5{
				left: 883px;top: -10px;
				opacity: 1;
			}
			.step6{
				left: 1167px;top: 167px;
				opacity: 1;
			}
		}
	}
	
	

	.content {
		font-size: 18px;
		line-height: 30px;
		text-shadow: 0px 17px 6px rgba(1, 58, 24, 1);
		margin-top: 20px;
	}

	.process {
		margin-top: 5%;

		.item {
			.leftImg {
				width: 135px;
				height: 148px;
				background-image: url(../../../static/images/index/greCircle.png);
				background-repeat: no-repeat;
				background-size: 100% 100%;
				margin-right: 17px;
				font-size: 26px;
				font-weight: bold;
				color: rgba(35, 205, 104, 1);
				line-height: 24px;
				padding: 50px 40px;
			}

			.rightText {
				width: 316px;

				.right_title {
					font-size: 30px;
					font-weight: bold;
					text-shadow: 0px 17px 6px rgba(1, 58, 24, 1);
				}

				.right_content {
					font-size: 18px;
					font-weight: 400;
					line-height: 24px;
					text-shadow: 0px 17px 6px rgba(1, 58, 24, 1);
					margin-top: 10px;
				}
			}
		}

		.middle_line {
			padding: 10px 42px 20px;

			.cicle {
				width: 43px;
				height: 40px;
			}

			.line {
				width: 322px;
				height: 23px;
			}
		}

		.bottom {
			.item {
				margin-left: 365px;

				.leftImg {
					width: 141px;
					height: 139px;
					background-image: url(../../../static/images/index/yelCircle.png);
					color: rgba(255, 168, 0, 1);
					padding: 65px 40px;
				}
			}
		}
	}
}

.index4 {
	// height: 80%;
	height: calc(100% - 288px);
	color: #fff;
	background-image: url(../../../static/images/index/bg4.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	// padding-top: 60px;
	position: relative;
	.container{
		position: absolute;
		top: 50%;
		left: 50%;
        transform: translate(-50%,-50%)
	}
	.itemsbox{
		margin-left: -800px;
		width: 1200px;
		opacity: 0;
	}
	.item {
		width: 270px;
		height: 240px;
		background: transparent;
		// margin-bottom: 40px;
		margin-bottom: 3%;
		text-align: center;
		color: #333333;
		
		&:nth-of-type(5){
			margin-bottom: 0;
		}
		&:nth-of-type(6){
			margin-bottom: 0;
		}
		&:nth-of-type(7){
			margin-bottom: 0;
		}
		&:nth-of-type(8){
			margin-bottom: 0;
		}
		img {
			width: 80px;
			height: 80px;
			margin: 55px 0 25px;
		}

		.name {
			font-size: 24px;
			font-weight: 500;
			margin-bottom: 10px;
		}

		.english {
			font-size: 12px;
		}
	}
	.itemChild{
		height: 100%;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 10px;
		.itemcontent{
			width: 100%;
			height: 100%;
		}
		// transition:all 1s ease;
		// -webkit-transition: all 1s ease; /* Safari 和 Chrome */
		// -o-transition: all 1s ease; /* Opera */
	}

	.item:hover {
		// transform: scale(1.1);
		transform:  scale(1.1);
		transition:all 1s ease;
		-webkit-transition: all 1s ease; /* Safari 和 Chrome */
		-o-transition: all 1s ease; /* Opera */
		.itemChild{
			transform: rotateY(-180deg) ;
			transition:all 1s ease;
			-webkit-transition: all 1s ease; /* Safari 和 Chrome */
			-o-transition: all 1s ease; /* Opera */
			.itemcontent{
				transform: rotateY(-180deg) ;
				transition:all 1s ease;
				-webkit-transition: all 1s ease; /* Safari 和 Chrome */
				-o-transition: all 1s ease; /* Opera */
			}
		}
	}
	
	&.activeCur{
		.itemsbox{
			margin-left: 0;
			opacity: 1;
			transition:all 1s ease;
			-webkit-transition: all 1s ease; /* Safari 和 Chrome */
			-o-transition: all 1s ease; /* Opera */
		}
	}
}
@media screen and (max-height: 900px) {
	.index4 {
		.container{
			padding-top: 20px;
		}
		.item {
			width: 270px;
			height: 180px;
			background: transparent;
			border-radius: 10px;
			// margin-bottom: 40px;
			margin-bottom: 3%;
			text-align: center;
			color: #333333;

			img {
				width: 50px;
				height: 50px;
				margin: 25px 0 15px;
			}

			.name {
				font-size: 24px;
				font-weight: 500;
				margin-bottom: 10px;
			}

			.english {
				font-size: 12px;
			}
		}
		.itemChild{
			height: 100%;
			background: rgba(255, 255, 255, 0.8);
			border-radius: 10px;
			.itemcontent{
				width: 100%;
				height: 100%;
			}
			
		}

		// .item:hover {
		// 	transform: scale(1.1);
		// }
		.item:hover {
			// transform: scale(1.1);
			transform:  scale(1.1);
			transition:all 1s ease;
			-webkit-transition: all 1s ease; /* Safari 和 Chrome */
			-o-transition: all 1s ease; /* Opera */
			.itemChild{
				transform: rotateY(-180deg) ;
				transition:all 1s ease;
				-webkit-transition: all 1s ease; /* Safari 和 Chrome */
				-o-transition: all 1s ease; /* Opera */
				.itemcontent{
					transform: rotateY(-180deg) ;
					transition:all 1s ease;
					-webkit-transition: all 1s ease; /* Safari 和 Chrome */
					-o-transition: all 1s ease; /* Opera */
				}
			}
		}
	
	&.activeCur{
		.itemsbox{
			margin-left: 0;
			opacity: 1;
			transition:all 1s ease;
			-webkit-transition: all 1s ease; /* Safari 和 Chrome */
			-o-transition: all 1s ease; /* Opera */
		}
	}
	}
}
.footer {
		// width: 1440px;
		// height: 288px;
		background: #5E5B58;
		background-image: url('/static/images/index/footerBg.png');
  		background-size: auto 100%;
		.logo {
			margin-top: 30px;
		}
		.container{
			padding-top: 0;
		}

		>section {
			max-width: 1200px;
			padding-top: 30px;
			.list {
				padding: 25px 0 0;
				width: 1200px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
			
				.listdl {
					dt {
						font-size: 16px;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color:#FFFFFF;
						margin-bottom: 17px;
					}
			
					dd {
						display: flex;
						align-items: center;							
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #999999;
						margin-bottom: 16px;
					}
				}
				.listdl2 {
					img{
						width: 25px;
						height: 25px;
						margin-right: 10px;
					}
					dt {
						font-size: 16px;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color:#FFFFFF;
						margin-bottom: 17px;
					}
								
					dd {
						display: flex;
						align-items: center;
						
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #999999;
						margin-bottom: 10px;
					}
				}
			}
			.topUl {
				display: flex;
				color: #E6E6E6;
				font-size: 14px;
				cursor: pointer;
				

				li {
					padding: 0 30px;
					border-right: 1px solid white;
					&:hover{
						color: #23CD68;
					}
				}

				li:nth-of-type(1) {
					padding-left: 0 !important;
				}

				li:last-of-type {
					border-right: none;
				}
			}
			>.bottom {
				border-top: 1px solid #535353;
				// margin-top: 18px;
				height: 40px;
				line-height: 40px;
				color: #818181;
			}
		}
	}
</style>
<style lang="css">
	.indexpage .el-carousel__container{
		height:100vh !important;
		min-height: 830px;
	}
	.indexpage .el-carousel__indicator--vertical .el-carousel__button {
		width: 12px;
		height: 12px;
		border-radius: 10px;
	}
</style>
