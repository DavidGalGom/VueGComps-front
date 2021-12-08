<template>
  <LoadingSpinner v-if="isLoading" />
  <div class="shopping-cart" v-if="!isLoading">
    <h1 class="shopping-cart-title" :class="anyComponent ? 'hidden' : ''">
      This is your product list
    </h1>
    <h1 class="shopping-cart-title" :class="anyComponent ? '' : 'hidden'">
      You have an empty product list
    </h1>
    <button
      class="get-all-button"
      :class="anyComponent ? 'hidden' : ''"
      type="submit"
      value="GetAll"
      @click="buyAll"
    >
      Get ALL!!!
    </button>
    <div class="list-container">
      <ul
        class="productCart-list"
        v-for="productInCart in productsInCart"
        :key="productInCart.id"
      >
        <li class="productCart-id">
          <CartCard
            :id="productInCart.id"
            :name="productInCart.name"
            :price="productInCart.price"
            :mainImage="productInCart.mainImage"
            :description="productInCart.description"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import state from "../store/state";
import CartCard from "@/components/CartCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default defineComponent({
  name: "ShoppingCart",
  components: {
    CartCard,
    LoadingSpinner,
  },
  data() {
    return {
      anyComponent: false,
    };
  },
  computed: {
    ...mapState(["productsInCart", "isLoading"]),
  },
  methods: {
    ...mapActions(["getUserCompsByIdAction", "buyAllComponentsAction"]),
    buyAll() {
      this.buyAllComponentsAction();
      this.$toast("Congratulations you acquired all the components");
      this.anyComponent = true;
    },
  },
  mounted() {
    this.getUserCompsByIdAction();

    if (state.isAuthenticated === false) {
      this.$router.push("/login");
    }
    if (state.productsInCart.length === 0) {
      this.anyComponent = true;
    }
  },
});
</script>

<style scoped lang="scss">
@import "./src/styles/variables";
.shopping-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 63vh;
}
.shopping-cart-title {
  text-align: center;
  font-size: 22px;
}
.productCart-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
}
.productCart-id {
  margin: 0;
  padding: 0;
  list-style: none;
}
.hidden {
  display: none;
}
.get-all-button {
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
@media (min-width: 700px) {
  .list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  .get-all-button {
    border-radius: 20px;
    font-size: 26px;
    height: 75px;
    width: 180px;
    &:hover {
      height: 75px;
      width: 180px;
    }
  }
}
@media (min-height: 700px) {
  .shopping-cart {
    min-height: 73vh;
  }
}
</style>
