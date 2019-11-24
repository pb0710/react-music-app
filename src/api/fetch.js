import axios from 'axios'
import config from 'common/config'

// 自定义拦截器
const instance = axios.create({
	baseURL: config.domain,
	method: 'get',
	withCredentials: true // 配置跨域
})

axios.interceptors.request.use(
	req => {},
	err => {
		console.error('request被拦截', err)
	})

instance.interceptors.response.use(
	res => {
		const { status, data } = res
		if (status === 200 && data.code === 200) {
			return Promise.resolve(data)
		} else {
			console.log(`响应状态：${status}`)
		}
	},
	err => {
		const { status, statusText } = err.response
		console.error(`被拦截，响应状态：${status}，${statusText}`)
		return Promise.reject(err)
	})

const fetch = instance

export default fetch