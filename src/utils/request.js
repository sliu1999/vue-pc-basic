import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import router from '../router'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    // timeout: 1 // request timeout
})

service.defaults.timeout = 600 * 1000

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent

        config.headers['Token'] = localStorage.getItem('token')
        config.headers['Authorization'] = localStorage.getItem('token')
        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            //   config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 10000) {
            if (res.code == '9999') {
                window.localStorage.removeItem("socket");
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("userInfo");
                if (!isLogin) {
                    isLogin = true;
                    // Message.error('登录失效,请重新登录')
                    window.sessionStorage.removeItem('token')
                    // window.localStorage.removeItem('token')
                    // window.localStorage.removeItem('userInfo')
                    // removeToken()
                    // console.log(router.history.current.fullPath)
                    MessageBox.confirm('您还没有登录，请您先登录', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        showCancelButton: true,
                    }).then(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.history.current.fullPath
                            }
                        })
                        isLogin = false;

                    }).catch(() => {
                        isLogin = false;

                        // Message({
                        //   type: 'info',
                        //   message: '已取消删除'
                        // });          
                    })
                }
            }
            if (res.code != '9999') {
                // Message({
                //     message: res.message || 'Error',
                //     type: 'error',
                //     duration: 5 * 1000
                // })
                if(res.message){
                    Message({
                        message: res.message,
                        type: 'error',
                        duration: 3 * 1000
                    })
                }
                // console.log(res.message)
            }


            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            //     // to re-login
            //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
            //         confirmButtonText: 'Re-Login',
            //         cancelButtonText: 'Cancel',
            //         type: 'warning'
            //     }).then(() => {
            //         store.dispatch('user/resetToken').then(() => {
            //             location.reload()
            //         })
            //     })
            // }
            // console.log(res)
            return Promise.reject(new Error(res.message || '网络错误'))
        } else {
            return res
        }
    },
    error => {
        // console.log('err' + error) // for debug
        Message({
            message: '网络连接错误 请刷新重试',
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
