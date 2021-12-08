<template>
  <div class="register">
    <div
      class="register-container"
      :class="$store.state.nightMode ? '' : 'register-light'"
    >
      <div :class="correctData ? '' : 'shake-form'">
        <div class="register-header">
          <h2 class="register-title">Register:</h2>
          <img
            class="register-toggler"
            data-test="toggle-from"
            :src="openRegister ? 'Selected-burger-menu.png' : 'account-f92.png'"
            alt="open/close from icon"
            height="40"
            @click="toggleRegister"
          />
        </div>
        <div class="hidden-container" :class="openRegister ? '' : 'hidden'">
          <div :class="$store.state.nightMode ? '' : 'register-light'">
            <form
              id="register-form"
              data-test="delete-from"
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
              <label for="password"></label>
              <input
                id="password"
                v-model="password"
                placeholder="Enter your password"
                type="password"
              />
              <label for="password"></label>
              <input
                id="password2"
                v-model="password2"
                placeholder="Repeat your password"
                type="password"
              />
              <label for="age">Age:You must have 18+</label>
              <input
                class="age-input"
                id="age"
                v-model="age"
                type="number"
                placeholder="Enter your age"
                min="18"
                max="120"
              />
              <h3
                class="wrong-data-register"
                :class="correctData ? 'hidden' : ''"
              >
                Please introduce a correct data
              </h3>
              <button
                class="register-button"
                type="submit"
                value="Register"
                :disabled="isDisabled"
                :class="isDisabled ? 'disabled' : ''"
              >
                Register
              </button>
            </form>
          </div>
        </div>
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
      openRegister: false,
      name: "",
      userName: "",
      email: "",
      age: 18,
      password: "",
      password2: "",
      isDisabled: true,
      correctData: true,
    };
  },
  methods: {
    ...mapActions(["addUserAction"]),
    toggleRegister() {
      this.openRegister = !this.openRegister;
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
        this.isDisabled = false;
    },
    async onSubmit() {
      const user: User = {
        userName: this.userName,
        email: this.email,
        password: this.password,
        age: this.age,
        name: this.name,
      };
      if (this.password === this.password2) {
        await this.addUserAction(user);
        this.userName = "";
        this.name = "";
        this.age = +"";
        this.email = "";
        this.password = "";
        this.password2 = "";
        this.$toast("Register successfully completed");
        this.correctData = true;
      } else if (this.password !== this.password2) {
        this.correctData = false;
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
.register-light {
  background-color: $lightAlterColor;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.hidden-container {
  width: 300px;
  min-height: 320px;
  background-color: $alterColor;
  border-radius: 0 0 25px 25px;
}
.hidden {
  display: none;
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
  &:hover {
    border: solid 2px $mainColor;
    height: 31px;
    width: 216px;
  }
}
.register-button {
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

.shake-form {
  animation: shake 0.5s;
  border-radius: 25px;
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

@media (min-width: 700px) {
  .register-container {
    margin-right: 15px;
  }
  .hidden-container {
    margin-right: 15px;
    display: block;
  }
  .register-toggler {
    display: none;
  }
  .register {
    border-right: solid 2px $mainColor;
  }
}
</style>
