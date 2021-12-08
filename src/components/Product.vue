<template>
  <div
    class="card-container"
    :class="$store.state.nightMode ? '' : 'container-light'"
  >
    <div class="image-container">
      <img :src="mainImage" alt="component" class="mainImage-component" />
    </div>
    <div class="info-container">
      <h3
        class="component-name"
        :class="$store.state.nightMode ? '' : 'name-light'"
      >
        {{ name }}
      </h3>
      <p class="component-price">{{ price }} €</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Product",
  props: ["id", "name", "description", "price", "mainImage"],
});
</script>

<style scoped lang="scss">
@import "./src/styles/variables";
.card-container {
  background-color: $alterColor;
  margin: 15px;
  border: solid $textColor 2px;
  border-radius: 10px;
  display: flex;
  height: 140px;
  width: 310px;
  &:hover {
    border: solid $mainColor 2px;
  }
}
.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
}
.mainImage-component {
  object-fit: cover;
  height: 104px;
  width: 160px;
  margin: 18px;
  margin-right: 0px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
}
.component-name {
  color: $textColor;
  text-align: center;
  font-size: 14px;
  margin: 0;
  &:hover {
    cursor: pointer;
    color: $mainColor;
  }
}
.component-price {
  color: $mainColor;
  font-size: 20px;
}
.name-light {
  color: $lightTextColor;
}
.container-light {
  border: solid $lightTextColor 2px;
  background-color: $lightAlterColor;
}
@media (min-width: 1000px) {
  .card-container {
    margin: 20px;
    height: 190px;
    width: 400px;
  }
  .mainImage-component {
    height: 154px;
    width: 237px;
  }
}
</style>
