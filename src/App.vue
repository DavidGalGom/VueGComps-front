<template>
  <div class="all-app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "app",
  components: { Header, Footer },
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
