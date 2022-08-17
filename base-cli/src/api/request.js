import axios from 'axios'
import { Toast } from 'vant';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 10000,
 
  });

  instance.interceptors.request.use(function (config) {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
    });
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    Toast.clear()
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    Toast.clear()
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default instance