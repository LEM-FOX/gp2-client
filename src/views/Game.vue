<template>
  <div class="home">
    <h1>{{ Username }}: {{ check }}</h1>
    <h1>Score Lawan: {{ scoreLawan }} </h1>
    <button @click='count'>Push Button</button>
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
      this.counters = payload
      this.Username = payload.name// ini array
    },
    scoreLawan (payload) {
    //   console.log(payload)
      this.scoreLawan = payload
    },
    username (payload) {
      this.Username = payload
    }
  },
  methods: {
    count () {
      this.check += 1
      this.$socket.emit('newCounter', { scoreLawan: this.scoreLawan, score: this.check })
    }
  }
}
</script>
