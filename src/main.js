import Vue from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import router from './router'
import echarts from 'echarts'
import {
	Base64
} from 'js-base64';
Vue.prototype.$Base64 = Base64
import '@/icons'
// import '@/permission' // permission control

import * as filters from './filters'
import '@/styles/index.scss' // global css
import Pagination from '@/components/Pagination/index'

Vue.prototype.$echarts = echarts
Vue.prototype.$baseUrl = process.env.VUE_APP_BASE_API

Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})


import VueCropper from 'vue-cropper'
Vue.use(VueCropper)
import axios from 'axios'
import utils from './vuex/utils'
import {
	Message
} from 'element-ui'

global.isLogin = false;

//确认信息，点确认隐藏
// Vue.prototype.$alert = function(msg,f){
//  if (f == undefined){
//      f = function(){}
//  }
//  Message.$alert(msg,'提示')
// }

//提示信息，自动隐藏
Vue.prototype.$tip = function(msg, type) {
	if (type == undefined) {
		type = 'success'
	}
	Message({
		type: type,
		message: msg
	})
}

Vue.directive('enterNumber', {
  inserted: function (el) {
    el.addEventListener("keypress",function(e){
      e = e || window.event;
      let charcode = typeof e.charCode === 'number' ? e.charCode : e.keyCode;
      let re = /\d/;
      if(!re.test(String.fromCharCode(charcode)) && charcode > 9 && !e.ctrlKey){
        if(e.preventDefault){
          e.preventDefault();
        }else{
          e.returnValue = false;
        }
      }
    });
  }
});


//提示信息，自动隐藏
Vue.prototype.$showLoading = function(msg) {
	// Mint.Indicator.open(msg);
}


//提示信息，自动隐藏
Vue.prototype.$hideLoading = function(msg) {
	// Mint.Indicator.close();
}


//全局辅助
Vue.prototype.utils = utils;
Vue.prototype.axios = axios

// 全局方法挂载
Vue.prototype.url = process.env.VUE_APP_BASE_API
// 文件上传地址
// Vue.prototype.fileUrl = 'http://47.101.175.127:8082'
Vue.prototype.fileUrl = 'http://oss.skabs.com.cn/images'
Vue.prototype.$fileUrl = 'http://oss.skabs.com.cn/images'
Vue.prototype.socketUrl = 'http://www.skabs.com.cn:9105' // 支付结果socket链接ip地址

// Vue.prototype.fileUrl = 'http://114.115.154.147:8082'
// Vue.prototype.$fileUrl = 'http://114.115.154.147:8082'

// Vue.prototype.fileUrl = 'http://192.168.1.151:9101'
// Vue.prototype.$fileUrl = 'http://192.168.1.151:9101'

Vue.use(Element)
Vue.use(Pagination)
Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
