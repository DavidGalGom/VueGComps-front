import { State } from "@/types/interfaces";

const stateMock = {
  products: [
    {
      name: "product name",
      type: "product type",
      price: 1,
      mainImage: "product main image",
      alterImage: "product alter image",
      brand: "product brand",
      description: "product description",
      isFavorite: false,
      id: 1,
    },
  ],
  productById: {
    name: "product name",
    type: "product type",
    price: 10,
    mainImage: "product main image",
    alterImage: "product alter image",
    brand: "product brand",
    description: "product description",
    isFavorite: false,
    id: "1",
  },
  user: {
    name: "user",
    userName: "user name",
    password: "password",
    email: "email",
    age: 10,
    isAdmin: false,
    components: [],
    image: "image",
  },
  isAuthenticated: false,
  productsInCart: [],
};
export default stateMock as unknown as State;
