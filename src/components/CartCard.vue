<template>
  <div class="cart-card-container">
    <div class="card-container">
      <div class="image-container">
        <img :src="mainImage" alt="component" class="mainImage-component" />
      </div>
      <div class="info-container">
        <img
          class="delete-cart-button"
          src="../../public/Selected-burger-menu.png"
          alt="Delete from cart button"
          height="40"
          @click="deleteToCart"
        />
        <h3 class="component-name">{{ name }}</h3>
        <p class="component-price">{{ price }} €</p>
      </div>
    </div>
    <button class="cart-buy-button">Proceed to BUY</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import state from "../store/state";

export default defineComponent({
  name: "CartCard",
  props: ["id", "name", "description", "price", "mainImage"],
  computed: {
    ...mapState(["productsInCart", "productsInCartId"]),
  },
  methods: {
    ...mapActions(["deleteProductToCartAction"]),
    deleteToCart() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { id }: any = state.productsInCart;
      this.deleteProductToCartAction(id);
    },
  },
});
</script>

<style scoped lang="scss">
@import "./src/styles/variables";
.cart-card-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.card-container {
  background-color: $alterColor;
  margin: 15px 15px 0px 15px;
  border: solid $textColor 2px;
  border-radius: 10px 10px 0 0;
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
  padding: 0px 5px 20px 15px;
}
.mainImage-component {
  object-fit: cover;
  height: 104px;
  width: 160px;
  margin: 18px;
  margin-right: 0px;
  border-radius: 10px;
}
.delete-cart-button {
  margin-left: 60px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
.component-name {
  color: $textColor;
  text-align: center;
  font-size: 14px;
  margin: 0;
}
.component-price {
  color: $mainColor;
  font-size: 20px;
}
.cart-buy-button {
  color: $alterColor;
  background-color: $mainColor;
  width: 314px;
  font-size: 18px;
  height: 35px;
  border-radius: 0 0 10px 10px;
  border: solid $mainColor 2px;
  &:hover {
    border: solid $textColor 2px;
    cursor: pointer;
    color: $mainColor;
    background-color: $alterColor;
  }
}
</style>
