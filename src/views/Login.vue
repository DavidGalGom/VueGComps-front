<template>
  <div class="login">
    <h1 class="login-title">Please login, if you are new go to register</h1>
    <RegisterForm />
    <LoginForm />
    <LogoutButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
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
</style>
