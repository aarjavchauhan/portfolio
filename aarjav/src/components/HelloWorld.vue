<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <h4>aarjav.chauhan@colorado.edu</h4>
    <a rel="icon" href="/aarjavCV.pdf" target="_blank">curriculum vitae</a>
    <h2>other projects &#8595;</h2>
    <h5>haiku generator</h5>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
