<template>
  <div class="shopping-cart">
    <h1 class="shopping-cart-title">This is your list of products</h1>
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
import CartCard from "@/components/CartCard.vue";

export default defineComponent({
  name: "ShoppingCart",
  components: {
    CartCard,
  },
  computed: {
    ...mapState(["getUserCompsById"]),
  },
  methods: {
    ...mapActions(["getUserCompsByIdAction"]),
  },
  mounted() {
    this.getUserCompsByIdAction();
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
</style>
