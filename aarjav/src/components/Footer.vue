<template>
  <div>
    <hr/>
    <a rel="icon" href="https://github.com/aarjavchauhan" target="_blank"> <ph-code :size="24" color="black" /> </a>
    <a rel="icon" href="https://open.spotify.com/user/1273252765" target="_blank"> <ph-music-notes :size="24" color="black" /> </a>
  </div>
</template>

<script>
import { PhCode, PhMusicNotes} from "phosphor-vue";
export default {
  name: "App",
  components: {
    PhCode,
    PhMusicNotes
  }
};
</script>

<style scoped>
svg {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
