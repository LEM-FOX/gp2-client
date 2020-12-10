<template>
  <div>
    <form @submit.prevent="inputUserName">
      <label for="">User Name</label>
      <input v-model="userName" type="text" name="" id="">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    inputUserName () {
      // console.log(this.userName)
      localStorage.setItem('username', this.userName)
      this.$socket.emit('terserahlulah', this.userName)
      this.$router.push('/game')
    }
  }
}
</script>

<style>

</style>
