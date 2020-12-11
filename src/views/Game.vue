<template>
<div id='Game'>
  <section class='hero'>
  <div class='hero-body'>
    <div class='container'>
      <h1 class='title'>
        Game room
      </h1>
    </div>
  </div>
</section>
<!-- dalem -->
  <div  class='hero-body'>
    <div class='container is-fullhd'>
      <div class='row'>
        <div class='columns is-two-fifths'>
          <!-- card -->
          <div class='card'>
            <div class='card-content'>
              <div class='media'>
                <div class='media-left'>
                  <figure class='image is-48x48'>
                    <img src='https://i.pinimg.com/originals/e8/b4/3c/e8b43c11674e6477a1059e088f766f0a.png' alt='Placeholder image'>
                  </figure>
                </div>
                <div class='media-content'>
                  <small>player name:</small>
                  <p class='title is-8'>{{ players[0] }}</p>
                  <small>score:</small>
                  <p class='subtitle is-6'>{{ check }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <button class="button" @click='count'>Push Button</button> -->
          <br>
          <!-- card lawan -->
          <!-- card -->
          <div class='card'>
            <div class='card-content'>
              <div class='media'>
                <div class='media-left'>
                  <figure class='image is-48x48'>
                    <img src='https://i.pinimg.com/originals/e8/b4/3c/e8b43c11674e6477a1059e088f766f0a.png' alt='Placeholder image'>
                  </figure>
                </div>
                <div class='media-content'>
                  <small>player name:</small>
                  <p class='title is-8'>{{ players[1] }}</p>
                  <small>score:</small>
                  <p class='subtitle is-6'>{{ scoreLawan }} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='columns is-three-quarters'>
          <!-- layar buat diteken -->
          <div class='container'>
            <target :players="players" @newScore="newScore" :check="check" :scoreLawan="scoreLawan"></target>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import target from '../components/Target'
import Swal from 'sweetalert2'
export default {
  name: 'Game',
  components: {
    target
  },
  data () {
    return {
      counters: [],
      check: 0,
      scoreLawan: 0,
      Username: '',
      score: 0,
      players: [],
      targetStatus: true,
      targetStyle: {
        position: 'relative',
        width: '20%',
        height: '20%',
        top: '100%',
        left: '100%'
      }
    }
  },
  sockets: {
    countClick (payload) {
      this.counters = payload
      this.Username = payload.name // ini array
    },
    scoreLawan (payload) {
      this.scoreLawan = payload
    },
    username (payload) {
      this.Username = payload
    },
    collectionPlayer (payload) {
      console.log(payload)
      this.players = payload
    },
    gameOver (payload) {
      Swal.fire(payload)
      this.$router.push('/room')
    }
  },
  methods: {
    count () {
      this.check += 1
      this.targetStatus = false
      this.$socket.emit('newCounter', {
        roomName: this.getRoomDetail.name,
        scoreLawan: this.scoreLawan,
        score: this.check
      })
    },
    player () {
      return this.players
    },
    newScore (payload) {
      this.check = payload
    }
  },
  computed: {
    getPlayerData () {
      return this.$store.state.playerData
    }
  }
}
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
