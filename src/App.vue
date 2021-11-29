<template>
  <div class="all-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
  components: {},
});
</script>

<style lang="scss">
@import "./src/styles/variables";
body {
  background-color: $backgroundColor;
  font-family: "Source Sans Pro", sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: $textColor;
}
#nav {
  padding: 30px;
  color: $textColor;
}
</style>
