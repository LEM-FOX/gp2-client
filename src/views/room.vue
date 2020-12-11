<template>
  <div>
      <div class="room-top">
        <h1>Room Page</h1>
        <form @submit.prevent="makingRoom">
            <input type="text" v-model="roomName" >
            <button type="submit">Create Room</button>
        </form>
      </div>
      <div class="room-down">
          <div class="card" v-for="(room,i) in getRoom" :key="i">
            <div class="card-body">
                <h5 class="card-title">{{room.name}}</h5>
                <a href="#" class="btn btn-primary" @click="joinRoom(room.name)">Join</a>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'room',
  data () {
    return {
      roomName: ''
    }
  },
  methods: {
    makingRoom () {
      const payload = {
        roomName: this.roomName,
        admin: localStorage.username
      }
      this.$socket.emit('createRoom', payload)
      this.roomName = ''
    },
    joinRoom (name) {
      const payload = {
        roomName: name,
        username: localStorage.username
      }
      this.$socket.emit('joinRoom', payload)
      this.$router.push('/lobby')
    }
  },
  computed: {
    getRoom () {
      return this.$store.state.rooms
    }
  }
}
</script>

<style>

</style>
