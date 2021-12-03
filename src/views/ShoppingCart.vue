<template>
  <div class="shopping-cart">
    <h1 class="shopping-cart-title">This is your list of products</h1>
    <CartCard />
    <CartCard />
    <CartCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CartCard from "@/components/CartCard.vue";

export default defineComponent({
  name: "ShoppingCart",
  components: {
    CartCard,
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
