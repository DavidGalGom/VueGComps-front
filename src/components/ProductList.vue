<template>
  <ul class="product-list" v-for="product in products" :key="product._id">
    <Product
      :name="product.name"
      :price="product.price"
      :mainImage="product.mainImage"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import Product from "@/components/Product.vue";

export default defineComponent({
  name: "ProductList",
  components: {
    Product,
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["getProductsAction"]),
  },
  mounted() {
    this.getProductsAction();
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
