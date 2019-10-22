import * as types from '../types'

const state = {
    token: localStorage.getItem('token') || '',
    userinfo: localStorage.getItem('userinfo') || ''
}

const mutations = {
  [types.LOGIN]: (state, data) => {
      //更改token的值
      state.token = data;
      localStorage.setItem('token', data);
  },
  [types.USERINFO]: (state , data) => {
    //把用户名存起来
    state.userinfo = data;
    localStorage.setItem('userinfo', data);
  },
  [types.LOGOUT]: (state) => {
      //登出的时候要清除token
      state.token = null;
      state.userinfo = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userinfo');
  }
}

const actions = {
  LOGIN({ commit }, res){
    commit(types.LOGIN, res)
  },
  USERINFO({ commit }, res){
    commit(types.USERINFO, res)
  },
  LOGOUT({ commit }){
    commit(types.LOGOUT)
  }
}

export default {
    state,
    mutations,
    actions
}