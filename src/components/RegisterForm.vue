<template>
  <div class="register">
    <div class="register-container">
      <h2 class="register-title">Enter your data:</h2>
      <form class="register-form" @submit.prevent="onSubmit" autocomplete="off">
        <label for="userName"></label>
        <input
          class="username-input"
          id="userName"
          v-model="userName"
          type="text"
          placeholder="Enter your user name"
        />
        <label for="name"></label>
        <input
          class="name-input"
          id="name"
          v-model="name"
          type="text"
          placeholder="Enter your name"
        />
        <label for="email"></label>
        <input
          class="email-input"
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
        />
        <label for="age"></label>
        <input
          class="age-input"
          id="age"
          v-model="age"
          type="number"
          placeholder="Enter your age"
        />
        <label for="password" :class="same ? 'no' : ''"></label>
        <input
          id="password"
          v-model="password"
          placeholder="Enter your password"
          :class="same ? 'no' : ''"
          type="password"
        />
        <label for="password" :class="same ? 'no' : ''"></label>
        <input
          id="password"
          v-model="password"
          placeholder="Repeat your password"
          :class="same ? 'no' : ''"
          type="password"
        />
        <input
          class="register-button"
          type="submit"
          value="Register"
          disabled="isDisabled"
        />
      </form>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
@import "./src/styles/variables";
.register {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}
.register-container {
  width: 300px;
  min-height: 400px;
  background-color: $alterColor;
  border-radius: 25px;
}
.register-title {
  margin-top: 20px;
  font-size: 18px;
  margin-left: 20px;
}
.register-form {
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
  border: 0;
  &:hover {
    border: solid 2px $mainColor;
    height: 31px;
    width: 216px;
  }
}
.register-button {
  background-color: $mainColor;
  color: $backgroundColor;
  font-size: 22px;
  margin-bottom: 40px;
  height: 50px;
  width: 120px;
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
