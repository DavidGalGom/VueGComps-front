<template>
  <div class="login">
    <div class="login-container">
      <h2 class="login-title">Login:</h2>
      <form class="login-form" @submit.prevent="onSubmit" autocomplete="off">
        <label for="userName"></label>
        <input
          class="username-input"
          id="userName"
          v-model="userName"
          type="text"
          placeholder="Enter your user name"
        />

        <input
          id="password"
          v-model="password"
          placeholder="Enter your password"
          type="password"
        />
        <label for="password"></label>

        <button
          class="login-button"
          type="submit"
          value="Login"
          :class="username === '' || password === '' ? 'disabled' : ''"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { User } from "../types/interfaces";

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      userName: "",
      password: "",
      isDisabled: true,
    };
  },
  methods: {
    ...mapActions(["loginUserAction"]),
    async onSubmit() {
      const user: User = {
        userName: this.userName,
        password: this.password,
      };
      await this.loginUserAction(user);
      this.userName = "";
      this.password = "";
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
  },
});
</script>

<style scoped lang="scss">
@import "./src/styles/variables";
.login {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}
.login-container {
  width: 300px;
  min-height: 250px;
  background-color: $alterColor;
  border-radius: 25px;
}
.login-title {
  margin-top: 20px;
  font-size: 18px;
  margin-left: 35px;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  margin: 10px 0;
  height: 35px;
  width: 220px;
  border-radius: 15px;
  background-color: $textColor;
  font-size: 16px;
  border: none;
  padding-left: 15px;
  color: $backgroundColor;
  outline: none;
  &:hover {
    border: solid 2px $mainColor;
    height: 31px;
    width: 216px;
  }
}
.login-button {
  border-radius: 15px;
  margin-top: 10px;
  background-color: $mainColor;
  color: $backgroundColor;
  font-size: 22px;
  margin-bottom: 40px;
  height: 50px;
  width: 120px;
  border: none;
  &:hover {
    background-color: $alterColor;
    color: $mainColor;
    border: solid 2px $mainColor;
    cursor: pointer;
    height: 50px;
    width: 120px;
  }
}
.disabled {
  background-color: $backgroundColor;
  color: $textColor;
  &:hover {
    background-color: $backgroundColor;
    border: solid 2px $backgroundColor;
    color: $textColor;
    cursor: default;
  }
}
</style>
