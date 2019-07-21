import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const resourceHost = 'http://localhost:8088'

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {

  },
  mutations: {
    LOGIN (state, {accessToken}) {

      // 스토어에 엑세스 토큰 저장
      state.accessToken = accessToken
    },
    LOGOUT (state) {
      state.accessToken = null
    }
  },
  actions: {    
    LOGIN ({commit}, {email, password}) {
      return axios.post(`${resourceHost}/login`, {email, password})
        .then(({data}) => {
          // LOGIN 변이 실행
          commit('LOGIN', data)
        })
    },
    LOGOUT ({commit}) {
      commit('LOGOUT')
    },
  }
});
