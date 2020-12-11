import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import room from '../views/room.vue'
import lobby from '../views/lobby.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/room',
    name: 'room',
    component: room
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: lobby
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
