/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import jwtDecode from "jwt-decode";
import { ActionContext } from "vuex";
import { Product, State, User } from "../types/interfaces";

const actions = {
  async getProductsAction({
    commit,
  }: ActionContext<State, State>): Promise<void> {
    const { data } = await axios.get(
      `${process.env.VUE_APP_API_URL}/components`
    );

    commit("getProducts", data);
  },
  async getProductByIdAction(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void> {
    const { data } = await axios.get(
      `${process.env.VUE_APP_API_URL}/components/${id}`
    );

    commit("getProductById", data);
  },

  async addUserAction(
    { commit }: ActionContext<State, State>,
    user: User
  ): Promise<void> {
    await axios.post(`${process.env.VUE_APP_API_URL}/users/register`, user);
  },

  async loginUserAction(
    { commit }: ActionContext<State, State>,
    user: User
  ): Promise<void> {
    const { data: token } = await axios.post(
      `${process.env.VUE_APP_API_URL}/users/login`,
      user
    );
    const userInfo = jwtDecode(token.token);

    localStorage.setItem("userToken", JSON.stringify(token.token));

    commit("loginUser", userInfo);
  },

  async logoutUserAction({
    commit,
  }: ActionContext<State, State>): Promise<void> {
    localStorage.removeItem("userToken");
    const loggedUser: User = {
      id: "",
      name: "",
      userName: "",
      password: "",
      email: "",
      age: +"",
      isAdmin: false,
      components: [],
      image: "",
    };
    commit("logoutUser", loggedUser);
  },

  checkTokenAction({ commit }: ActionContext<State, State>): string | void {
    try {
      const token = JSON.parse(localStorage.getItem("userToken") || "");
      return commit("loggedUser", jwtDecode(token));
    } catch {
      return "Error";
    }
  },
  async getUserCompsByIdAction({
    commit,
  }: ActionContext<State, State>): Promise<void> {
    const token = JSON.parse(localStorage.getItem("userToken") || "");
    const tokenId: User = jwtDecode(token);
    const { data } = await axios.get(
      `${process.env.VUE_APP_API_URL}/users/${tokenId.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    commit("getUserCompsById", data.components);
  },
  async addProductToCartAction(
    { commit }: ActionContext<State, State>,
    { id, components }: { id: string; components: Array<Product> }
  ): Promise<void> {
    const token = JSON.parse(localStorage.getItem("userToken") || "");
    const user: User = jwtDecode(token);
    const newProducts = {
      ...user.components,
      id,
    };
    const authorization = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.put(
      `${process.env.VUE_APP_API_URL}/users/${user.id}`,
      newProducts,
      authorization
    );

    commit("addProductToCart", newProducts);
  },

  async deleteProductToCartAction(
    { commit }: ActionContext<State, State>,
    { id, components }: { id: string; components: Array<Product> }
  ): Promise<void> {
    const token = JSON.parse(localStorage.getItem("userToken") || "");
    const user: User = jwtDecode(token);
    const newProducts = {
      components: user.components?.filter((component) => component.id !== id),
    };
    const authorization = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.put(
      `${process.env.VUE_APP_API_URL}/users/${user.id}`,
      newProducts,
      authorization
    );

    commit("deleteProductToCart", newProducts);
  },
};

export default actions;
