import Axios from 'axios'   // 引入 axios
import store from '@/store'

import Qs from 'qs' // 引入 qs 模块，用来序列化 post 请求类型

import {message} from '../utils/utils'   // 引入封装好的 message 提示框

const baseURL =  process.env.VUE_APP_API_URL

const $axios = Axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // post: {
        //     "Content-Type": 
        // }
        
    },
    // 超时时间 单位是ms，这里设置了3s的超时时间
     timeout: 3 * 1000,

     

})
$axios.defaults.headers.post["Content-Type"] = "application/json";

//2. 设置请求拦截 request interceptor
$axios.interceptors.request.use(
    config => {
        console.log('config is', config)
        // /发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
        config.headers.token = 'overseasAdmin'
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

//3. 设置响应拦截 response interceptor
$axios.interceptors.response.use(
    res => {
        let overseasLoginToken = res.headers['xfk-login-token']

        console.log('res is', res)
        if(res.data.code === '1001') {
        }
        if (res.status === 200 && overseasLoginToken) {
            store.commit('user/SET_TOKEN', overseasLoginToken)
        }
        return res.data
    },
    err => {
        //异常处理
        console.log('err is', err.response)
        if(err && err.response) {
            switch(err.response.status) {
                case 404:
                    message("error","请求错误，未找到该资源",2000)
                    break;
            }
        }
        return Promise.reject(err)
    }
)

export default $axios