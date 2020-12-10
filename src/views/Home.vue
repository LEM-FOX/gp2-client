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
      console.log(this.userName)
    }
  }
}
</script>

<style>

</style>
