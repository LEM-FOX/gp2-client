<template>
  <div class="container">
    <div class="row" style="min-height: 100vh;">
      <div class="col-md-5 d-none d-sm-block">
        <div class="d-flex align-items-center" style="height: 100%;">
          <div class="rounded p-2">
            <label for="waiting-rooms mb-4">ＷＡＩＴＩＮＧ ＲＯＯＭ</label>
            <h1
              class="text-center mt-5 text-uppercase text-muted"
              style="z-index: 2; position: relative;"
            >
            </h1>
            <img
              src="https://cdn.dribbble.com/users/851368/screenshots/2091986/ghostbusters_dribble_gif.gif"
              alt="rooms"
              class="img-fluid"
              style="margin-top: -35px;"
            />
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <strong>Create room!</strong>
        <div class="row justify-content-center">
          <form @submit.prevent="makingRoom">
            <input type="text" v-model="roomName" /><br>
            <button class="btn btn-primary btn-sm mt-2" type="submit">create!</button>
          </form>
        </div>
        <div class="text-center">
          <div class="justify-content-center d-flex">
            <img
              src="https://cdn.dribbble.com/users/1785190/screenshots/3906047/search.gif"
              background="transparent"
              speed="1"
              loop=""
              autoplay=""
              z-index=0
              style="width: 300px;"
            >
          </div>
          <div class="room-down">
            <div class="card" v-for="(room,i) in getRoom" :key="i">
              <div class="card-body">
                <h5 class="card-title">{{room.name}}</h5>
                <a
                  href="#"
                  class="btn btn-primary"
                  @click="joinRoom(room.name)"
                  >Join</a
                >
              </div>
            </div>
          </div>
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
