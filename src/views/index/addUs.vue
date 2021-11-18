<template>
	<div class="indexpage">
		<div class="header">
			<div class="flex al_center jtf_between">
				<img src="/static/images/index/logo.png" />
				<div v-if="!userInfo" class="loginbtn cursor" @click="login">登录</div>
				<div v-else class="loginbtn cursor logined" @click="goDetail">{{ userInfo.trueName || userInfo.mobile }}</div>
			</div>
		</div>
		<div class="wrapper">
			<div>
				<div class="top">
					<span class="line"></span>
					<span style="margin: 0 10px;">苏垦农服平台，等待您的加入</span>
					<span class="line"></span>
				</div>
				<div class="flex jtf_between">
					<div class="item  font12">
						<p class="font20 center-text" style="margin-bottom: 5px;">文案专员</p>
						<p class="font12 center-text" style="margin-bottom: 20px;">Copywriter</p>
						<p class="font14 center-text" style="margin-bottom: 10px;">南京 | 1年经验 | 本科 | 招1人</p>
						<p class="font16 center-text" style="margin-bottom: 10px;">0.5-1.5万/月</p>
						<p class="cont">1、中文、行政管理、文秘等相关专业，一年以上相关工作经验；</p>
						<p class="cont">2、具备系统性工作的能力，思路、条理清晰；</p>
						<p class="cont">3、有较强的文案能力（书面表达等）；出色的文字组织能力，表达流畅，写作经验丰富，较强的逻辑和敏感度，有丰富的提案经验；</p>
						<p class="cont">4、熟练使用office办公软件（WORD、PPT、EXCEL）；熟练使用Photoshop软件；</p>
						<p class="cont">5、工作主动性强，具备强烈的服务意识，做事细致，踏实肯干，责任心和执行能力强。</p>
					</div>
					<div class="item  font12">
						<p class="font20 center-text" style="margin-bottom: 5px;">美工设计</p>
						<p class="font12 center-text" style="margin-bottom: 20px;">art designer</p>
						<p class="font14 center-text" style="margin-bottom: 10px;">南京 | 1年经验 | 本科 | 招1人</p>
						<p class="font16 center-text" style="margin-bottom: 10px;">0.5-1.5万/月</p>
						<p class="cont">1、美术、广告、平面设计等相关专业，工作经验2年以上；</p>
						<p class="cont">2、有电子商务网站界面设计、banner设计、活动策划页设计经验者优先；</p>
						<p class="cont">3、具备良好的美术基础，良好的创意构思能力；熟悉色彩搭配，思维活跃，有较强的美工功底和良好的构思，善于用视觉来表达想法；</p>
						<p class="cont">4、熟练使用Photoshop、illustrator等常用设计制作软件；会视频拍摄和剪辑者优先； </p>
						<p class="cont">5、工作认真，有责任心，踏实肯干，富有团队精神。</p>
					</div>
					<div class="item  font12">
						<p class="font20 center-text" style="margin-bottom: 5px;">系统运维工程师</p>
						<p class="font12 center-text" style="margin-bottom: 20px;">Service Engineer</p>
						<p class="font14 center-text" style="margin-bottom: 10px;">南京 | 1年经验 | 本科 | 招1人</p>
						<p class="font16 center-text" style="margin-bottom: 10px;">0.5-1.5万/月</p>
						<p class="cont">1、拥有2年以上中、大型公司系统运维工作经验；</p>
						<p class="cont">2、熟悉软件、网络基础知识，包括IT的基础架构设计、性能优化等；</p>
						<p class="cont">3、熟悉机房服务器等设备的硬件网络环境配置及问题处理；熟悉Linux操作系统和操作命令；</p>
						<p class="cont">4、熟悉mysql,mongodb,sqlserver,oracle等主流数据库的使用及优化，掌握常用的操作命令等；</p>
						<p class="cont">5、熟悉Docker、Vmware等常见的虚拟化平台技术；</p>
						<p class="cont">6、具备较强的系统故障排查和解决能力、具备网络安全意识和防护经验；</p>
						<p class="cont">7、熟悉Nginx、Apache、Tomcat、redis、zookeeper等常用开源工具的部署、管理和优化。</p>	
					</div>
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
	</div>
</template>

<script>
	
	
	import footerComponents from '../../layout/components/AppFooter.vue';
	export default {
		name: 'AddUs',
		components: {			
			footerComponents
		},
		data() {
			return {
				userInfo:{},
				titList2: [{
						title: '农资商城',
						path: 'Mall'
					},
					{
						title: '农机服务',
						path: 'NjService'
					},
					{
						title: '农技服务',
						path: 'TechService'
					},
					
					{
						title: '农金服务',
						path: 'Finance'
					},

					{
						title: '农业供需',
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

			};
		},
		created() {
			if (JSON.parse(localStorage.getItem('userInfo'))) {
				this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
			} else {
				this.userInfo = null;
				this.titList2.forEach((item, index) => {
					if (item.title == '农金服务') {
						this.titList2.splice(index, 1)
					}
				})
				// this.titList2.splice(1,1)
			}
		},
		mounted() {

		},
		methods: {

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
			

		},
		
	};
</script>

<style lang="scss" scoped>
	.indexpage {
		width: 100%;
	}

	.header {
		position: absolute;
		top: 0;
		height: 60px;
		background: linear-gradient(0deg, rgba(51, 51, 51, 0.3) 0%, rgba(77, 77, 77, 1) 100%);
		box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.07);
		width: 100%;
		z-index: 4;

		>div {
			// max-width: 1200px;
			width: 100%;
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

	.container {
		max-height: 1000px;
		padding-top: 60px;
	}
	.wrapper{
		// height: 790px;
		background-image: url('/static/images/index/addUs.png');
		background-size: 100% 100%;
		min-height: calc(100vh - 288px);
		>div{
			width: 1200px;
			margin: 0 auto;
			.top{
				padding: 120px 0 50px;
				color: #FFFFFF;
				font-size: 38px;
				display: flex;
				justify-content: center;
				align-items: center;
				.line{
					width: 70px;
					height: 2px;
					background-color: #FFFFFF;
				}
			}
			.item{
				width:373px;
				height:480px;
				background:rgba(255,255,255,0.85);
				box-shadow:0px 10px 15px 0px rgba(0, 0, 0, 0.3);
				border-radius:10px;
				padding: 50px 30px 0;
				.font16{
					font-weight:500;
					color:rgba(255,84,0,1);
				}
				.cont{
					line-height:18px;
					margin-bottom: 5px;
				}
			}
		}
	}
	.footer {
			// width: 1440px;
			height: 288px;
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

</style>
