<template>
  <div class="card-container">
    <div class="image-container">
      <img :src="mainImage" alt="component" class="mainImage-component" />
    </div>
    <div class="info-container">
      <h3 class="component-name">{{ name }}</h3>
      <p class="component-price">{{ price }} €</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Product",
  props: { name: String, price: Number, mainImage: String },
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
</style>
