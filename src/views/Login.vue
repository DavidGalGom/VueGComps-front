<template>
  <div class="login">
    <h1
      class="login-title"
      :class="$store.state.isAuthenticated ? 'hidden' : ''"
    >
      Please login, if you are new go to register
    </h1>
    <h1
      class="login-title"
      :class="$store.state.isAuthenticated ? '' : 'hidden'"
    >
      Are you sure to go away?
    </h1>
    <div class="register-login-container">
      <RegisterForm :class="$store.state.isAuthenticated ? 'hidden' : ''" />
      <LoginForm :class="$store.state.isAuthenticated ? 'hidden' : ''" />
    </div>
    <LogoutButton :class="$store.state.isAuthenticated ? '' : 'hidden'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterForm from "@/components/RegisterForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import LogoutButton from "@/components/LogoutButton.vue";

export default defineComponent({
  name: "Login",
  components: {
    RegisterForm,
    LoginForm,
    LogoutButton,
  },
});
</script>

<style scoped lang="scss">
@import "./src/styles/variables";
.login-title {
  color: $textColor;
  text-align: center;
  font-size: 16px;
}
.hidden {
  display: none;
}
@media (min-width: 700px) {
  .register-login-container {
    display: flex;
    justify-content: center;
  }
}
</style>
