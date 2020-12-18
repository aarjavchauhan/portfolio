<template>
  <div id="App">
    <router-view v-slot="{ Component}">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>

@font-face {
  font-family: "Argesta";
  src: local("Argesta"),   url(./fonts/argestadisplay-regular-webfont.ttf) format("truetype");
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* letter-spacing: 2vw; */
}

.fade-enter-active
 {
  transition: opacity 1s ease;
}

.fade-leave-active
{
  transition: opacity 0s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
