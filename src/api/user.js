// axios
import {get,post} from './config'

export default {
  // 登录
  login(data) {
    return post('login',data)
  },
  // 用户信息 post 方法
  getUserInfo(data) {
    return post('customer/customerDetail',data)
  },
  getCustomerList(data){
    return post('customer/list',data)
  },
  checkDuplicateCheck(data){
    return post('check/duplicateCheck',data)
  },
  getCustomerDetail(data){
    return post('customer/customerDetail',data)
  },
  getCustomerFollowList(data){
    return post('followUp/customerFollowup',data)
  },
  followUpEdit(data){
    return post('followUp/editFollowup',data)
  },
  followUpAdd(data){
    return post('followUp/addNewFollowup',data)
  },
  customerContractDetail(data){
    return post('contract/customerContract',data)
  },
  customerEntryInfo(data){
    return post('info/entry',data)
  },
  //新增用户
  AddCustomer(data){
    return post('customer/addCustomer',data)
  },
  EditCustomer(data){
    return post('customer/editCustomer',data)
  },
  checkStoreInfo(data){
    return post('store/checkStoreInfo',data)
  },
  checkCustomerName(data){
    return post('customer/checkCustomerNameInfo',data)
  },
  getAllCustomer(){
    return post('customer/getAllCustomer')
  },
  getAllBusinessType(){
    return post('businessType/getAllBusinessType')
  },
  getAllStores(data){
    return post('store/getAllStores',data)
  }
  
}
