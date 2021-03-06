<template>
  <div class="cart-card-container">
    <div
      class="card-container"
      :class="$store.state.nightMode ? '' : 'card-light'"
    >
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
        <h3
          class="component-name"
          :class="$store.state.nightMode ? '' : 'name-light'"
        >
          {{ name }}
        </h3>
        <p class="component-price">{{ price }} €</p>
      </div>
    </div>
    <button
      class="cart-buy-button"
      :class="$store.state.nightMode ? '' : 'button-light'"
      @click="buyToCart"
    >
      Proceed to BUY
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "CartCard",
  props: ["id", "name", "description", "price", "mainImage"],
  computed: {
    ...mapState(["productsInCart", "user"]),
  },
  methods: {
    ...mapActions(["deleteProductToCartAction", "getUserCompsByIdAction"]),
    deleteToCart() {
      this.deleteProductToCartAction(this.id);
      this.getUserCompsByIdAction(this.user.id);
    },
    buyToCart() {
      this.deleteProductToCartAction(this.id);
      this.getUserCompsByIdAction(this.user.id);
      this.$toast("Purchase done successfully");
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
.card-light {
  background-color: $lightAlterColor;
  border: solid $lightTextColor 2px;
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
.name-light {
  color: $lightTextColor;
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
.button-light {
  color: $lightTextColor;
  border: solid $lightTextColor 2px;
  &:hover {
    border: solid $mainColor 2px;
    color: $mainColor;
    background-color: $lightAlterColor;
  }
}
@media (min-width: 1000px) {
  .card-container {
    height: 190px;
    width: 400px;
  }
  .cart-buy-button {
    width: 404px;
  }
  .mainImage-component {
    height: 154px;
    width: 237px;
  }
}
</style>
