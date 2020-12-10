<template>
  <div class="home">
    <h1>{{ check }}</h1> || Score Lawan: <h1> {{ scoreLawan }} </h1>
    <button @click='count'>Push Button</button>
    <h1 v-for="(cnt, i) in counters" :key="i">{{cnt.name}} <br>{{cnt.counter}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
      counters: [],
      check: 0,
      scoreLawan: 0,
      Username: ''
    }
  },
  sockets: {
    countClick (payload) {
      this.counters = payload // ini array
    },
    scoreLawan (payload) {
    //   console.log(payload)
      this.scoreLawan = payload
    }
  },
  methods: {
    count () {
      this.check += 1
      this.$socket.emit('newCounter', { score: this.check })
    }
  }
}
</script>
