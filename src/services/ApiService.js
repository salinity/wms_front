import md5 from 'md5'
import Axios from 'axios'
/**
 * 接口服务基类
 */
export class ApiService {
  /**
   * [初始化接口服务]
   * @return {[Object]} [description]
   */
  constructor () {
    this.localCache = window.localStorage
    this.sessionCache = window.sessionStorage
    this.axios = Axios
    this.axios.defaults.baseURL = 'http://127.0.0.1:8080'
    this.axios.defaults.responseType = 'XMLHttpRequestResponseType'
  }
  async axiosGet (url, params) {
    this.axios.get(url, {params: params}).then(res => res.data)
  }
  /**
   * [MD5 加密方法]
   * @param {*} message
   * @return {[type]} [description]
   */
  md5 (message) {
    return md5(message)
  }
}
