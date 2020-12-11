<template>
  <div>
    <div
      class='home'
      style='display: flex; align-items: center; min-height: 100vh'
    >
      <div class='container mt-3 is-centered'>
        <div class='columns is-mobile is-centered'>
          <div class='column is-one-quarter'>
            <div class='card shadow rounded p-2'>
              <div>
                <div>
                  <img
                    src='https://media3.giphy.com/media/fwo1qSDGVRl2pYvOCy/source.gif'
                    alt=''
                  />
                </div>
                <h1 class='text-center' style='z-index: 2; position: relative'>
                  <b>disini ada hantu</b>
                </h1>
                <div class='p-4'>
                  <form @submit.prevent='inputUserName'>
                    <small>username</small><br>
                    <input v-model='userName' type='text' name='' id='' /><br>
                    <button>Submit</button>
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
