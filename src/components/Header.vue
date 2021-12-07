<template>
  <div class="header-nav-bar">
    <img
      class="burger-menu-logo"
      src="../../public/burger-menu-s.png"
      alt="burger menu"
      height="40"
      width="40"
      @click="toggleNavBar"
      data-test="toggle-burger"
    />
    <router-link class="home-link" to="/"
      ><img
        class="vuegcomp-logo"
        src="../../public/Logo-horizontal-PhotoRoom.png"
        alt="VueGComps logo"
        height="70"
    /></router-link>
    <img
      class="light-logo"
      :class="$store.state.nightMode ? '' : 'hidden'"
      @click="toggleNightMode"
      src="../../public/sun.png"
      alt="Light"
      height="50"
    />
    <img
      class="night-logo"
      :class="$store.state.nightMode ? 'hidden' : ''"
      @click="toggleNightMode"
      src="../../public/moon.png"
      alt="Night"
      height="50"
    />
    <h2
      class="light-bar"
      :class="$store.state.nightMode ? '' : 'hidden'"
      @click="toggleNightMode"
    >
      Light Mode
    </h2>
    <h2
      class="night-bar"
      :class="$store.state.nightMode ? 'hidden' : ''"
      @click="toggleNightMode"
    >
      Night Mode
    </h2>
    <router-link class="about-link" to="/shopping-cart"
      ><img
        class="shopping-cart-logo"
        src="../../public/shopping-cart-f92.png"
        alt="Shopping cart"
        height="50"
      />
      <h2 class="cart-bar">Shopping Cart</h2>
    </router-link>
    <router-link class="login-link" to="/login"
      ><img
        class="login-logo"
        :class="$store.state.isAuthenticated ? 'hidden' : ''"
        src="../../public/login-f92.png"
        alt="Login/Logout"
        height="50"
      />
      <img
        class="logout-logo"
        :class="$store.state.isAuthenticated ? '' : 'hidden'"
        src="../../public/logout-f92.png"
        alt="Login/Logout"
        height="50"
      />
      <h2
        class="login-bar"
        :class="$store.state.isAuthenticated ? 'hidden' : ''"
      >
        Login
      </h2>
      <h2
        class="logout-bar"
        :class="$store.state.isAuthenticated ? '' : 'hidden'"
      >
        Logout
      </h2>
    </router-link>
  </div>
  <div class="extended-nav-bar" :style="{ display: toggleInvisible }">
    <div class="extended-home">
      <router-link class="about-link" to="/">
        <h2 class="extended-home-bar">Home</h2></router-link
      >
    </div>
    <div class="extended-cart">
      <router-link class="about-link" to="/shopping-cart">
        <h2 class="extended-cart-bar">Shopping Cart</h2></router-link
      >
    </div>
    <div class="extended-login">
      <router-link class="about-link" to="/login">
        <h2
          class="extended-login-bar"
          :class="$store.state.isAuthenticated ? 'hidden' : ''"
        >
          Login
        </h2>
        <h2
          class="extended-login-bar"
          :class="$store.state.isAuthenticated ? '' : 'hidden'"
        >
          Logout
        </h2></router-link
      >
    </div>
    <div class="extended-night-mode">
      <h2
        class="extended-light-bar"
        :class="$store.state.nightMode ? '' : 'hidden'"
        @click="toggleNightMode"
      >
        Light Mode
      </h2>

      <h2
        class="extended-night-bar"
        :class="$store.state.nightMode ? 'hidden' : ''"
        @click="toggleNightMode"
      >
        Night Mode
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Header",
  computed: {
    ...mapState(["nightMode"]),
  },
  methods: {
    ...mapActions(["toggleNightModeAction"]),
    toggleNavBar() {
      if (this.toggleInvisible === "none") {
        this.toggleInvisible = "block";
        this.toggleBurger = false;
      } else {
        this.toggleInvisible = "none";
        this.toggleBurger = true;
      }
    },
    toggleNightMode() {
      this.toggleNightModeAction();
    },
  },
  data() {
    return {
      toggleInvisible: "none",
      toggleBurger: true,
    };
  },
});
</script>

<style scoped lang="scss">
@import "./src/styles/variables";
.header-nav-bar {
  margin: 0 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  width: 88vw;
}
.extended-nav-bar {
  margin: 0 20px;
  height: 160px;
  width: 88vw;
  z-index: 1;
  margin-bottom: 20px;
}
.cart-bar,
.login-bar,
.logout-bar,
.night-bar,
.light-bar {
  display: none;
}
.extended-home,
.extended-cart,
.extended-login,
.extended-night-mode {
  background-color: $backgroundColor;
  height: 40px;
  padding: 0px;
  margin: 0px;
  border-bottom: solid $mainColor 2px;
}
.extended-home {
  border-top: solid $mainColor 2px;
}
.extended-home-bar,
.extended-cart-bar,
.extended-login-bar,
.extended-night-bar,
.extended-light-bar {
  display: flex;
  align-items: center;
  font-size: 18px;
  background-color: $backgroundColor;
  height: 40px;
  padding: 0px;
  margin: 0px;
  &:hover {
    cursor: pointer;
    color: $mainColor;
  }
}
.burger-menu-logo,
.vuegcomp-logo,
.shopping-cart-logo,
.login-logo,
.logout-logo,
.light-logo,
.night-logo {
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
.light-logo,
.night-logo {
  display: none;
}
a {
  text-decoration: none;
  color: $textColor;
}
.hidden {
  display: none;
}
@media (min-width: 1000px) {
  .burger-menu-logo {
    display: none;
  }
  .cart-bar,
  .login-bar,
  .logout-bar {
    display: block;
    margin: 0 10px;
    &:hover {
      color: $mainColor;
    }
  }
  .about-link {
    display: flex;
    align-items: center;
  }
  .login-link {
    display: flex;
    align-items: center;
  }
  .vuegcomp-logo {
    height: 100px;
  }
  .header-nav-bar {
    justify-content: flex-end;
  }
  .home-link {
    position: absolute;
    left: 40px;
  }
  .light-logo,
  .night-logo {
    display: block;
  }
  .light-bar,
  .night-bar {
    display: block;
    margin: 0 10px;
    &:hover {
      color: $mainColor;
      cursor: pointer;
    }
  }
  .hidden {
    display: none;
  }
}
</style>
