import axios from 'axios';
import qs from "qs";
import { Message } from "element-ui";
import router from "../router/routes.js";

var baseURL = '';

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	return response;
}, function(error) {
	if (error && error.response) {
	      switch (error.response.status) {
	        case 400:
	          error.message = '错误请求'
	          break;
	        case 401:
	          error.message = '未授权，请重新登录'
	          break;
	        case 403:
	          error.message = '拒绝访问'
	          break;
	        case 404:
    	 		Message({
		          	showClose: true,
		          	message: "404报错",
		          	type: "error"
		        });
//	          error.message = '请求错误,未找到该资源'
	          break;
	        case 405:
	          error.message = '请求方法未允许'
	          break;
	        case 408:
	          error.message = '请求超时'
	          break;
	        case 500:
	        	Message({
		          	showClose: true,
		          	message: "500后台服务报错",
		          	type: "error"
		        });
//	          error.message = '服务器端出错'
	          break;
	        case 501:
	          error.message = '网络未实现'
	          break;
	        case 502:
	          error.message = '网络错误'
	          break;
	        case 503:
	          error.message = '服务不可用'
	          break;
	        case 504:
	          error.message = '网络超时'
	          break;
	        case 505:
	          error.message = 'http版本不支持该请求'
	          break;
	        default:
	          error.message = `连接错误${error.response.status}`
	      }
	    } else {
	      error.message = "连接到服务器失败"
	    }
	// 对响应错误做点什么
	return Promise.reject(error);
});

function HttpAxios(method, url, params, success, failure) {
	axios({
		baseURL: baseURL,
		url:url,
		method: method, 
		params:params,
		timeout:10000,
		responseType: 'json',
		headers: {"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"},	
		data: params
	})
	.then(function (res) {
      if (res.data.success === true) {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data)
        } else {
          window.alert('error: ' + JSON.stringify(res.data))
        }
      }
    })
    .catch(function (err) {
      let res = err.response
    })
}


export default {
	get: function(url, params, success, failure) {
		return HttpAxios('GET', url, params, success, failure)
	},
	post: function(url, params, success, failure) {
		return HttpAxios('POST', url, params, success, failure)
	},
	put: function(url, params, success, failure) {
		return HttpAxios('PUT', url, params, success, failure)
	},
	delete: function(url, params, success, failure) {
		return HttpAxios('DELETE', url, params, success, failure)
	}
}


