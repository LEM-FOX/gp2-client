<template>
  <div>
    <div
      class='home'
      style='display: flex; align-items: center; min-height: 100vh'
    >
      <div class='container'>
        <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card shadow rounded p-4">
            <div style="margin-top: -50%;">
              <div style="padding-top: 70%; position: relative; z-index: 0;">
                <img
                  src="https://i.pinimg.com/originals/ce/4a/eb/ce4aeb8b5c981d54bf8e0da0ae1ef28a.gif"
                  style="width=50%"
                />
              </div>
              <h1 class="text-center" style="z-index: 2; position: relative;">
                <b>GHOST HUNT!</b>
              </h1>
              <h3 class="text-center">lets hunt!</h3>
              <div class="p-4">
                <form @submit.prevent="inputUserName">
                  <small>username</small><br />
                  <input v-model="userName" type="text" name="" id="" class="input"/>
                  <button class="btn btn-primary mt-3">Submit</button>
                </form>
              </div>
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
  name: 'Home',
  data () {
    return {
      userName: '',
      score: 0
    }
  },
  methods: {
    inputUserName () {
      const payload = {
        name: this.userName,
        score: this.score
      }
      localStorage.setItem('username', this.userName)
      this.$socket.emit('playerRegistration', payload)
      this.$router.push('/room')
    }
  }
}
</script>

<style>
</style>
