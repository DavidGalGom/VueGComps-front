<template>
  <div
    class="all-app"
    :class="$store.state.nightMode ? 'night-mode' : 'light-mode'"
  >
    <Header />
    <div class="router-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "app",
  components: { Header, Footer },
  computed: {
    ...mapState(["loggedUser"]),
  },
  methods: {
    ...mapActions(["checkTokenAction"]),
  },
  mounted() {
    if (localStorage.getItem("userToken")) {
      this.checkTokenAction();
    }
  },
});
</script>

<style lang="scss">
@import "./src/styles/variables";
body {
  background-color: $backgroundColor;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
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
.all-app {
  margin: 0;
  padding: 0;
}
.light-mode {
  background-color: $lightBackgroundColor;
  color: $lightTextColor;
}
.night-mode {
  background-color: $backgroundColor;
  color: $textColor;
}
</style>
