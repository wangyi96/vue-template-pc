import api from "@/api/index"
import methods from '@/utils/methods'
import router from '@/router/index'
import { Message } from 'element-ui'

const getDefaultState = () => {
  return {
    token: '',
    department: '',
    employeeRoleMappings: [],
    group: '',
    imgUrl: '',
    userName: '',
    userId: '',
    role: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_STATE: (state, res) => {
    Object.assign(state, res)
  }
}

const actions = {
  // user login
  login({ commit }, params) {
    return new Promise(async (resolve) => {
      const res = await api.user.login(params)
      if (res.code) {
        Message.error(res.msg)
      } else {
        commit('SET_STATE', res)
        resolve()
      }
    })
  },
  // user logout
  logout({ commit, state }) {
    api.user.logout().then(res => {
      commit('RESET_STATE')
      methods.removeSession('store')
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}