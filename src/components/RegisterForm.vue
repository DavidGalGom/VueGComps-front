<template>
  <div class="register">
    <div class="register-container">
      <div class="register-header">
        <h2 class="register-title">Register:</h2>
        <img
          class="register-toggler"
          :src="toggleBurger"
          alt="open/close from icon"
          height="40"
          @click="toggleRegister"
        />
      </div>
      <div class="hidden-container" :style="{ display: toggleInvisible }">
        <form
          class="register-form"
          @submit.prevent="onSubmit"
          autocomplete="off"
          @change="checkForm"
        >
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
          <label
            for="password"
            :class="notSame ? 'not-same-password' : ''"
          ></label>
          <input
            id="password"
            v-model="password"
            placeholder="Enter your password"
            :class="notSame ? 'no' : ''"
            type="password"
          />
          <label
            for="password"
            :class="notSame ? 'not-same-password' : ''"
          ></label>
          <input
            id="password2"
            v-model="password2"
            placeholder="Repeat your password"
            :class="notSame ? 'no' : ''"
            type="password"
          />
          <input
            class="register-button"
            type="submit"
            value="Register"
            :class="isDisabled ? 'disabled' : ''"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { User } from "../types/interfaces";

export default defineComponent({
  name: "RegisterForm",
  data() {
    return {
      toggleBurger: "account-f92.png",
      toggleInvisible: "none",
      name: "",
      userName: "",
      email: "",
      age: +"",
      password: "",
      password2: "",
      notSame: false,
      isDisabled: false,
    };
  },
  methods: {
    ...mapActions(["addUserAction"]),
    toggleRegister() {
      if (this.toggleBurger === "account-f92.png") {
        this.toggleInvisible = "block";
        this.toggleBurger = "Selected-burger-menu.png";
      } else {
        this.toggleInvisible = "none";
        this.toggleBurger = "account-f92.png";
      }
    },
    checkForm() {
      if (
        this.userName !== "" &&
        this.name !== "" &&
        this.age !== 0 &&
        this.email !== "" &&
        this.password !== "" &&
        this.password2 !== ""
      )
        if (this.password !== this.password2) {
          this.notSame = true;
        } else {
          this.isDisabled = true;
        }
    },
    async onSubmit() {
      const user: User = {
        userName: this.userName,
        email: this.email,
        password: this.password,
        age: this.age,
        name: this.name,
      };
      try {
        await this.addUserAction(user);
      } catch (error) {
        this.notSame = true;
      }
    },
  },
});
</script>

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
  min-height: 60px;
  background-color: $alterColor;
  border-radius: 25px;
}
.hidden-container {
  width: 300px;
  min-height: 320px;
  background-color: $alterColor;
  border-radius: 0 0 25px 25px;
}
.register-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.register-toggler {
  margin-right: 35px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
.register-title {
  margin-top: 20px;
  font-size: 18px;
  margin-left: 35px;
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
