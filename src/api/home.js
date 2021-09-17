import {get,post} from './config'

export default {
  homeIndex(data){
    return post('homepage/index',data)
  },
  productSale(){
    return post('homepage/productSale')
  },
}