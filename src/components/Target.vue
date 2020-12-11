<template>
  <div>
    <img :style="targetStyle" v-if="targetStatus" @click="count" id="target" src="../assets/hantu-2.gif">
  </div>
</template>

<script>
export default {
  name: 'target',
  data () {
    return {
      targetStatus: true,
      check: 0,
      targetStyle: {
        position: 'relative',
        width: '20%',
        top: '100%',
        left: '100%'
      }
    }
  },
  methods: {
    count () {
      this.check += 1
      this.targetStatus = false
      this.$socket.emit('newCounter', { scoreLawan: this.scoreLawan, score: this.check })
      setInterval(this.changeTargetStatus, 2000)
      this.targetStyle.left = Math.floor(Math.random() * 100).toString() + '%'
      this.targetStyle.top = Math.floor(Math.random() * 100).toString() + '%'
    },
    changeTargetStatus () {
      this.targetStatus = true
      // this.targetStyle.left = Math.floor(Math.random() * 100).toString() + '%'
      // this.targetStyle.top = Math.floor(Math.random() * 100).toString() + '%'
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
