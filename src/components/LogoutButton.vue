<template>
  <div class="logout-container">
    <button
      class="logout-button"
      type="submit"
      value="Logout"
      @submit.prevent="onSubmit"
    >
      Log Out
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogoutButton",
  data() {
    return {};
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
</style>
