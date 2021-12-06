<template>
  <div class="login">
    <div class="login-container" :class="correctData ? '' : 'shake-form'">
      <h2 class="login-title">Login:</h2>
      <form
        class="login-form"
        @submit.prevent="onSubmit"
        autocomplete="off"
        id="login-form"
      >
        <label for="userName"></label>
        <input
          class="username-input"
          id="userName-login"
          v-model="userName"
          type="text"
          placeholder="Enter your user name"
        />

        <input
          id="password-login"
          v-model="password"
          placeholder="Enter your password"
          type="password"
        />
        <label for="password"></label>
        <h3 class="wrong-data-login" :class="correctData ? 'hidden' : ''">
          Please introduce a correct data
        </h3>
        <button
          class="login-button"
          type="submit"
          value="Login"
          :class="userName === '' || password === '' ? 'disabled' : ''"
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
      correctData: true,
    };
  },
  methods: {
    ...mapActions(["loginUserAction"]),
    async onSubmit() {
      const user: User = {
        userName: this.userName,
        password: this.password,
      };
      try {
        await this.loginUserAction(user);
        this.userName = "";
        this.password = "";
        this.$router.push("/");
        window.scrollTo(0, 0);
      } catch {
        this.correctData = false;
      }
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
.hidden {
  display: none;
}

@media (min-width: 700px) {
  .login-container {
    margin-left: 15px;
  }
}
.shake-form {
  animation: shake 0.5s;
  border: solid $mainColor 3px;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
