<template>
  <div class="list-container">
    <ul class="product-list" v-for="product in products" :key="product.id">
      <li class="product-id">
        <router-link class="details-link" :to="/details/ + product.id">
          <Product
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :mainImage="product.mainImage"
            :description="product.description"
          />
        </router-link>
      </li>
    </ul>
  </div>
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
.product-id {
  margin: 0;
  padding: 0;
  list-style: none;
}
.details-link {
  text-decoration: none;
}
@media (min-width: 700px) and (max-width: 1000px) {
  .list-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
