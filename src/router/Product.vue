<template>
  <div class="card-container">
    <div class="image-container">
      <img
        src="https://www.muycomputer.com/wp-content/uploads/2015/02/placabase_2.jpg"
        alt="component"
        class="mainImage-component"
      />
    </div>
    <div class="info-container">
      <h3 class="component-name">AsusRog Motherboard</h3>
      <p class="component-price">199,99 €</p>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
@import "./src/assets/variables";
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
  height: 104px;
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
  font-size: 16px;
  margin: 0;
  &:hover {
    cursor: pointer;
    color: $mainColor;
  }
}
.component-price {
  color: $mainColor;
  font-size: 24px;
}
</style>
