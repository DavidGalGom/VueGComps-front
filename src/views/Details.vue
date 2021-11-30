<template>
  <ProductDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import ProductDetails from "../components/ProductDetails.vue";

export default defineComponent({
  name: "Details",
  props: {
    name: String,
    price: Number,
    mainImage: String,
    description: String,
    id: String,
  },
  components: {
    ProductDetails,
  },
  computed: {
    ...mapState(["productById"]),
  },
  methods: {
    ...mapActions(["getProductByIdAction"]),
  },
  mounted() {
    this.getProductByIdAction(this.id);
  },
});
</script>

<style scoped lang="scss"></style>
