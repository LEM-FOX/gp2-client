<template>
<div>
  <h1>watiting room {{getRoomDetail.name}}</h1>
  <button v-if="username == adminName " @click="start">start</button>
  <div class="card" v-for="(user,i) in getRoomDetail.users" :key="i">
    <div class="card-body">
     <h5 class="card-title">{{user}}</h5>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'lobby',
  data () {
    return {
      adminName: '',
      room: {},
      username: localStorage.username
    }
  },
  methods: {
    start () {
      this.$socket.emit('startGame', this.getRoomDetail.name)
      // this.$router.push('/game')
    }
  },
  computed: {
    getRoomDetail () {
      return this.$store.state.roomDetail
    }
  },
  created () {
    this.adminName = this.getRoomDetail.admin
  }
}
</script>

<style>

</style>
