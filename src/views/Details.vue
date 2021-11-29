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
        <img class="previous-carousel" src="" width="20" height="30" />
        <img
          class="component-image"
          src="https://www.profesionalreview.com/wp-content/uploads/2020/08/AMD-A520-es-lanzado-nuevas-placas-base-de-gama-baja-para-Ryzen_4.jpg"
          alt="Component"
          width="250"
        />
        <img class="next-carousel" src="" width="20" height="30" />
      </div>
      <button class="add-cart-button">Add to cart</button>
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
</style>
