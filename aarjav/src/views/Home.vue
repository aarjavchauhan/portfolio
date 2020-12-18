<template>
  <div>
    <h1>aarjav</h1>
    <hr />
    <h4>aarjav.chauhan@colorado.edu</h4>
    <a rel="icon" href="/aarjavCV.pdf" target="_blank">curriculum vitae</a>
    <h2>other projects &#8595;</h2>
     <router-link to="/haiku">Haiku</router-link>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
