<template>
  <div class="login">
    <h1 class="login-title">Please login, if you are new go to register</h1>
    <RegisterForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterForm from "@/components/RegisterForm.vue";

export default defineComponent({
  name: "Home",
  components: {
    RegisterForm,
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
