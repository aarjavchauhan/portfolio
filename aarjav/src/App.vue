<template>
  <div id="App">
    <Header />
    <router-view v-slot="{ Component}">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {Header,Footer}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

a {
  color: #661b1c;
}

#app {
  font-family: 'Raleway', sans-serif;
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
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
