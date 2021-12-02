const state = {
  products: [],
  productById: {
    name: "",
    type: "",
    price: 0,
    mainImage: "",
    alterImage: "",
    brand: "",
    description: "",
    isFavorite: false,
    id: "",
  },
  user: {
    name: "",
    userName: "",
    password: "",
    email: "",
    age: 0,
    isAdmin: false,
    components: [],
    image: "",
  },
  isAuthenticated: false,
};

export default state;
