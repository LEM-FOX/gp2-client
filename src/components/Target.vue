<template>
  <img :style="targetStyle" v-if="targetStatus" @click="count" id="target" src="../assets/hantu-2.gif">
</template>

<script>
export default {
  name: 'target',
  data () {
    return {
      targetStatus: true,
      targetStyle: {
        position: 'relative',
        width: '20%',
        height: '20%',
        top: '100%',
        left: '100%'
      },
      score: this.check
    }
  },
  props: ['check', 'scoreLawan', 'players'],
  methods: {
    count () {
      this.score += 1
      this.$emit('newScore', this.score)
      this.targetStatus = false
      this.$socket.emit('newCounter', {
        roomName: this.getRoomDetail.name,
        scoreLawan: this.scoreLawan,
        score: this.score,
        players: this.players
      })
      setInterval(this.changeTargetStatus, 2000)
      this.targetStyle.left = Math.floor(Math.random() * 100).toString() + '%'
      this.targetStyle.top = Math.floor(Math.random() * 100).toString() + '%'
    },
    changeTargetStatus () {
      this.targetStatus = true
      // this.targetStyle.left = Math.floor(Math.random() * 100).toString() + '%'
      // this.targetStyle.top = Math.floor(Math.random() * 100).toString() + '%'
    }
  },
  computed: {
    getRoomDetail () {
      return this.$store.state.roomDetail
    }
  }
}
</script>

<style>
/* #target {
    position: relative;
    width: 20%;
    top:100%;
    left: 100%;
} */
</style>
