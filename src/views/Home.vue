<template>
  <div class="home">
    <h1 class="home-title">Our components</h1>
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductList from "@/components/ProductList.vue";

export default defineComponent({
  name: "Home",
  components: {
    ProductList,
  },
});
</script>

<style lang="scss">
@import "./src/styles/variables";
.home-title {
  text-align: center;
  font-size: 22px;
  margin: 0;
  padding: 10px 0px;
}
</style>
