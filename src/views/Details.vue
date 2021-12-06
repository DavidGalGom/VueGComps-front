<template>
  <div class="details">
    <h1 class="details-title">Details</h1>
    <div class="details-container">
      <div details-main-info-desktop>
        <div class="icons-details-container">
          <img
            @click="onSubmit"
            class="back-button"
            src="../../public/back-button-f92.png"
            alt="back button"
            height="50"
          />
          <img
            class="favorite-button"
            :class="$store.state.isAuthenticated ? 'hidden' : 'hidden'"
            src="../../public/favorite-f92.png"
            alt="favorite button"
            height="50"
          />
        </div>
        <div class="container-name-price">
          <p class="component-name">{{ productById.name }}</p>
          <p class="component-price">{{ productById.price }} €</p>
        </div>
        <div class="container-carousel">
          <img
            class="previous-carousel"
            src="../../public/previous-f92.png"
            width="20"
            height="30"
            alt="previous arrow"
          />
          <img
            class="component-image"
            :src="productById.mainImage"
            alt="Component"
            width="250"
          />
          <img
            class="next-carousel"
            src="../../public/next-f92.png"
            width="20"
            height="30"
            alt="next arrow"
          />
        </div>
        <div class="button-container">
          <button class="add-cart-button" @click="addToCart">
            Add to cart
          </button>
        </div>
      </div>
      <div class="details-information-desktop">
        <h2 class="details-subtitle">Product details:</h2>
        <p class="details-paragraph">
          {{ productById.description }}
        </p>
        <img
          @click="onSubmit"
          class="back-button-desktop"
          src="../../public/back-button-f92.png"
          alt="back button"
          height="80"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { mapActions, mapState } from "vuex";
import state from "../store/state";

export default defineComponent({
  name: "Details",

  computed: {
    ...mapState(["productById"]),
  },
  methods: {
    ...mapActions(["getProductByIdAction", "addProductToCartAction"]),
    onSubmit() {
      this.$router.push("/");
    },
    addToCart() {
      if (state.isAuthenticated === false) {
        this.$router.push("/login");
      } else {
        const { components } = state.user;

        console.log(components);
        this.addProductToCartAction(components);
      }
    },
  },
  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.getProductByIdAction(id);
  },
});
</script>

<style lang="scss" scoped>
@import "./src/styles/variables";
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.details-title {
  text-align: center;
}
.details-container {
  width: 300px;
  min-height: 400px;
  background-color: $alterColor;
  border-radius: 25px;
}
.icons-details-container {
  display: flex;
  justify-content: space-between;
}
.back-button {
  margin-left: 25px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
}
.favorite-button {
  margin-right: 25px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
}
.container-name-price {
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.component-name {
  font-size: 18px;
}
.component-price {
  color: $mainColor;
  font-size: 18px;
  width: 45%;
}
.container-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.component-image {
  object-fit: cover;
  height: 160px;
  width: 240px;
  margin: 18px 5px;
}
.previous-carousel,
.next-carousel {
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
.add-cart-button {
  margin: 20px;
  height: 35px;
  width: 200px;
  border-radius: 30px;
  background-color: $mainColor;
  color: $alterColor;
  font-size: 24px;
  border: none;
  &:hover {
    cursor: pointer;
    color: $mainColor;
    background-color: $alterColor;
    border: solid 2px $mainColor;
  }
}
.button-container {
  display: flex;
  justify-content: center;
}
.details-subtitle {
  font-size: 18px;
  margin: 30px;
}
.details-paragraph {
  font-size: 16px;
  padding: 0 30px;
  word-break: keep-all;
  margin-bottom: 30px;
}
.hidden {
  display: none;
}
.back-button-desktop {
  display: none;
}
@media (min-width: 700px) {
  .details-container {
    width: 600px;
  }
  .container-name-price {
    margin-left: 100px;
    width: 400px;
    display: flex;
  }
  .component-name {
    font-size: 22px;
  }
  .component-price {
    font-size: 24px;
    width: 28%;
  }
  .back-button {
    margin-left: 50px;
    margin-top: 40px;
    height: 80px;
  }
  .component-image {
    border-radius: 30px 30px 0 0;
    width: 400px;
    object-fit: cover;
    height: 260px;
    margin: 18px 5px 0 5px;
  }
  .previous-carousel,
  .next-carousel {
    width: 50px;
    height: 75px;
    margin: 20px;
  }
  .add-cart-button {
    margin-top: 0;
    border-radius: 0 0 30px 30px;
    width: 400px;
    height: 65px;
    font-size: 30px;
  }
  .details-subtitle {
    font-size: 24px;
    margin-left: 50px;
  }
  .details-paragraph {
    font-size: 18px;
    margin-left: 20px;
  }
}
@media (min-width: 1000px) {
  .details-container {
    background-color: $backgroundColor;
    display: flex;
    flex-direction: row;
    min-height: 67vh;
    width: 95%;
  }
  .back-button {
    display: none;
  }
  .details-information-desktop {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  .back-button-desktop {
    display: block;
    height: 80px;
    width: 80px;
    align-self: center;
    &:hover {
      cursor: pointer;
      transform: scale(0.9);
    }
  }
  .details-title {
    display: none;
  }
  .details-paragraph {
    min-height: 40%;
  }
}
@media (min-height: 700px) {
  .details {
    min-height: 75vh;
  }
}
</style>
