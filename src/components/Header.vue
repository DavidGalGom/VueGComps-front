<template>
  <div class="header-nav-bar">
    <img
      class="burger-menu-logo"
      :src="toggleBurger"
      alt="burger menu"
      height="40"
      width="40"
      @click="toggleNavBar"
    />
    <router-link class="home-link" to="/"
      ><img
        class="vuegcomp-logo"
        src="Logo-horizontal-PhotoRoom.png"
        alt="VueGComps logo"
        height="70"
    /></router-link>

    <router-link class="about-link" to="/shopping-cart"
      ><img class="shopping-cart-logo" src="shopping-cart-f92.png" alt="Shopping cart" height="50"
    /></router-link>
    <router-link class="login-link" to="/login"
      ><img class="login-logo" src="login-f92.png" alt="Login/Logout" height="50"
    /></router-link>
  </div>
  <div class="extended-nav-bar" :style="{ display: toggleInvisible }">
    <div class="extended-home">
      <router-link class="about-link" to="/"> <h2 class="extended-home-bar">Home</h2></router-link>
    </div>
    <div class="extended-cart">
      <router-link class="about-link" to="/shopping-cart">
        <h2 class="extended-cart-bar">Shopping Cart</h2></router-link
      >
    </div>
    <div class="extended-login">
      <router-link class="about-link" to="/login">
        <h2 class="extended-login-bar">Login</h2></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  methods: {
    toggleNavBar() {
      if (this.toggleInvisible === "none") {
        this.toggleInvisible = "block";
        this.toggleBurger = "Selected-burger-menu.png";
      } else {
        this.toggleInvisible = "none";
        this.toggleBurger = "burger-menu-s.png";
      }
    },
  },
  data() {
    return {
      toggleInvisible: "none",
      toggleBurger: "burger-menu-s.png",
    };
  },
});
</script>
