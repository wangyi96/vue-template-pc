import user from './user'
import home from './home'
import {get,post} from './config'

export default{
  getUserInfo(){
    return post('personal/getUserInfo')
  },
  user,home
}
