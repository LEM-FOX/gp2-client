<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="https://i.gifer.com/1AWw.gif">
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <router-link to="/room">Room</router-link>
          </a>
          <a class="button is-light">
            <router-link to="/game">Game</router-link>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.button {
  text-decoration: none;
  color: white;
}
</style>
