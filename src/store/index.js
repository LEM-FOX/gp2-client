import Vue from 'vue'
import Vuex from 'vuex'
// import Home from '../views/Home.vue'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerData: [],
    rooms: [],
    roomDetail: {}
  },
  mutations: {
    SOCKET_playerData (state, payload) {
      state.playerData = payload
    },
    SOCKET_updatedRoom (state, payload) {
      state.rooms = payload
    },
    SOCKET_roomDetail (state, payload) {
      state.roomDetail = payload
      router.push('/lobby')
    },
    SOCKET_startGame (state, payload) {
      router.push('/game')
    }
  },
  actions: {
  },
  modules: {
  }
})
