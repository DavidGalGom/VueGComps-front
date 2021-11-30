<template>
  <ProductDetails
    v-if="ProductDetails(id)"
    :id="ProductDetails(id).id"
    :name="ProductDetails(id).name"
    :price="ProductDetails(id).price"
    :mainImage="ProductDetails(id).mainImage"
    :description="ProductDetails(id).description"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { mapActions, mapState, mapGetters } from "vuex";
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
    ...mapGetters(["getProductByIdGetter"]),

    ...mapState(["productById"]),
  },
  methods: {
    ...mapActions(["getProductByIdAction"]),
  },
  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.getProductByIdAction(id);
  },
});
</script>

<style scoped lang="scss"></style>
