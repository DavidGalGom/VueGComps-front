<template>
  <div class="register-container">
    <h2 class="register-title">Enter your data:</h2>
    <form class="register-form" @submit.prevent="onSubmit" autocomplete="off">
      <label for="userName"></label>
      <input
        id="userName"
        v-model="userName"
        type="text"
        placeholder="Enter your user name"
      />
      <label for="name"></label>
      <input
        id="name"
        v-model="name"
        type="text"
        placeholder="Enter your name"
      />
      <label for="email"></label>
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="Enter your email"
      />
      <label for="age"></label>
      <input
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
</template>

<script lang="ts"></script>

<style scoped lang="scss"></style>
