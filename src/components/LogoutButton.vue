<template>
  <div class="logout-container">
    <button
      class="logout-button"
      :class="$store.state.nightMode ? '' : 'button-light'"
      type="submit"
      value="Logout"
      @click="onSubmit"
    >
      Log Out
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { User } from "../types/interfaces";

export default defineComponent({
  name: "LogoutButton",
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["logoutUserAction"]),
    async onSubmit() {
      const user: User = {
        userName: this.userName,
        password: this.password,
      };
      await this.logoutUserAction(user);
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./src/styles/variables";
.logout-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  min-height: 57vh;
}
.logout-button {
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
.button-light {
  &:hover {
    background-color: $lightAlterColor;
  }
}
@media (min-width: 700px) {
  .logout-button {
    border-radius: 20px;
    font-size: 26px;
    height: 75px;
    width: 180px;
    &:hover {
      height: 75px;
      width: 180px;
    }
  }
}
@media (min-height: 700px) {
  .logout-container {
    min-height: 70vh;
  }
}
</style>
