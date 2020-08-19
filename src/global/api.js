/**
 * Created by Hazard on 2020/4/20.
 */
import conn from './conn'

/**
 * 所有请求的通用方法，此方法才会调用axios的方法
 * @param {string} method
 * @param {string} url
 * @param data  用户的请求数据，post、get一样传参就行，axios的请求拦截会分开处理
 * @param config  非业务参数，主要是配置loading、error信息的显示等
 * @returns {Promise<any>}
 */
const request = (method, url, data = {}, config = {}) => {
  data = { ...data, ...config }
  return conn.request({ method, url, data }).then((data) => ({ data })).catch((error) => ({ error }))
}

export default {
  searchPage: (params, config = {}) => request('get', '/v1/baseData/page', params, config),
}
