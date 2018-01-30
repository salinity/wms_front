import { ApiService } from './ApiService.js'
export default class UserService extends ApiService {
  // 获取用户列表信息
  async getUsersListPage (params) {
    super.axiosGet('/user', params)
  }
}
