<template>
  <div class="home">
    <h1 class="home-title">VueGComps</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style lang="scss">
@import "./src/styles/variables";
.home-title {
  color: $mainColor;
  text-align: center;
}
</style>
