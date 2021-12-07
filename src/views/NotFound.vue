<template>
  <div class="notFound-container">
    <h1 class="notFound-title">
      404 Page Not found, please go to a correct route
    </h1>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@import "./src/styles/variables";
.notFound-container {
  min-height: 63vh;
}
.notFound-title {
  text-align: center;
  font-size: 22px;
  margin: 0;
  padding: 10px 0px;
}
@media (min-height: 700px) {
  .notFound-container {
    min-height: 70vh;
  }
}
</style>
