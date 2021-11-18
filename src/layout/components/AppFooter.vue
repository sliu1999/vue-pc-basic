<template>
  <div class="footer center colorf">
    <section class="center borderbox h100p">
      <div class="container center jtf_between">
        <ul class="topUl">
          <li v-for="(title,index) in titList" :key="index" @click="linkTo(title)">{{title.title}}</li>
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
</template>

<script>
	export default {
		data() {
			return {
				titList: [{
						title: '农资商城',
						path: 'Mall'
					},{
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
				userInfo:null
			};
		},
		created() {
			this.userInfo=JSON.parse(localStorage.getItem('userInfo'))
			if(!this.userInfo){
				this.titList.forEach((item,index)=>{
					if(item.title == '农金服务'){
						this.titList.splice(index,1)
					}
				})
			}
			
		},
		methods: {
			linkTo(item) {
				this.$router.push({
					name: item.path
				});
			}
		}
	};
</script>

<style scoped lang="scss">
.footer {
  // width: 1440px;
  // height: 288px;
  background: #5e5b58;
  background-image: url('/static/images/index/footerBg.png');
  background-size: auto 100%;

  .logo {
    margin-top: 30px;
  }

  > section {
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
      color: #e6e6e6;
      font-size: 14px;
      cursor: pointer;

      li {
        padding: 0 30px;
        border-right: 1px solid white;
        &:hover {
          color: #23cd68;
        }
      }

      li:nth-of-type(1) {
        padding-left: 0 !important;
      }

      li:last-of-type {
        border-right: none;
      }
    }
    > .bottom {
      border-top: 1px solid #535353;
      // margin-top: 18px;
      height: 60px;
      line-height: 60px;
      color: #818181;
    }
  }
}
</style>
