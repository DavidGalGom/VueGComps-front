<template>
  <div class="login">
    <h1 class="login-title">Please login, if you are new go to register</h1>
    <RegisterForm />
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterForm from "@/components/RegisterForm.vue";
import LoginForm from "@/components/LoginForm.vue";

export default defineComponent({
  name: "Home",
  components: {
    RegisterForm,
    LoginForm,
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
</style>
