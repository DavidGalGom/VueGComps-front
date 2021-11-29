<template>
  <div class="details">
    <h1 class="details-title">Details</h1>
    <div class="details-container">
      <img class="back-button" src="back-button-f92.png" alt="back button" height="50" />
      <div class="container-name-price">
        <p class="component-name">Component name</p>
        <p class="component-price">99 €</p>
      </div>
      <div class="container-carousel">
        <img class="previous-carousel" src="previous-f92.png" width="20" height="30" />
        <img
          class="component-image"
          src="https://www.profesionalreview.com/wp-content/uploads/2020/08/AMD-A520-es-lanzado-nuevas-placas-base-de-gama-baja-para-Ryzen_4.jpg"
          alt="Component"
          width="250"
        />
        <img class="next-carousel" src="next-f92.png" width="20" height="30" />
      </div>
      <div class="button-container">
        <button class="add-cart-button">Add to cart</button>
      </div>
      <h2 class="details-subtitle">Product details:</h2>
      <p class="details-paragraph">
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
        tttttttttttttttttttttttttttttttttttttttttttt yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      </p>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
@import "./src/styles/variables";
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.details-title {
  text-align: center;
}
.details-container {
  width: 300px;
  min-height: 400px;
  background-color: $alterColor;
  border-radius: 25px;
}
.back-button {
  margin-left: 25px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
}
.container-name-price {
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.component-name {
  font-size: 18px;
}
.component-price {
  color: $mainColor;
  font-size: 22px;
}
.container-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.previous-carousel,
.next-carousel {
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
.add-cart-button {
  margin: 20px;
  height: 35px;
  width: 200px;
  border-radius: 30px;
  background-color: $mainColor;
  color: $alterColor;
  font-size: 24px;
  border: none;
  &:hover {
    cursor: pointer;
    color: $mainColor;
    background-color: $alterColor;
    border: solid 2px $mainColor;
  }
}
.button-container {
  display: flex;
  justify-content: center;
}
.details-subtitle {
  font-size: 18px;
  margin: 30px;
}
.details-paragraph {
  font-size: 16px;
  padding: 0 30px;
  word-break: break-all;
  margin-bottom: 30px;
}
</style>
