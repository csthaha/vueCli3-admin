import { loadToken, saveToken } from '@/utils/cache'
// import api from '@/api'
const state = {
  token: loadToken() // token
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = saveToken(token)
  }
}

const actions = {
  loginByUser({ commit }, data) {
    // return api.login
    //     .login(data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
