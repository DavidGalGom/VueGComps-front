<template>
  <ul class="product-list">
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Product from "@/components/Product.vue";

export default defineComponent({
  name: "ProductList",
  components: {
    Product,
  },
});
</script>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
}
</style>
