<template>
  <div class="shopping-cart">
    <h1 class="shopping-cart-title" :class="anyComponent ? '' : 'hidden'">
      This is your product list
    </h1>
    <h1 class="shopping-cart-title" :class="anyComponent ? 'hidden' : ''">
      You have an empty product list
    </h1>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import state from "../store/state";
import CartCard from "@/components/CartCard.vue";

export default defineComponent({
  name: "ShoppingCart",
  components: {
    CartCard,
  },
  data() {
    return {
      anyComponent: false,
    };
  },
  computed: {
    ...mapState(["productsInCart"]),
  },
  methods: {
    ...mapActions(["getUserCompsByIdAction"]),
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
.shopping-cart-title {
  color: $textColor;
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
</style>
