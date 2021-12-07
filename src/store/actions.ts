/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import jwtDecode from "jwt-decode";
import { ActionContext } from "vuex";
import { State, User } from "../types/interfaces";
import state from "./state";

const actions = {
  async getProductsAction({
    commit,
  }: ActionContext<State, State>): Promise<void> {
    commit("startLoading");
    const { data } = await axios.get(
      `${process.env.VUE_APP_API_URL}/components`
    );
    commit("stopLoading");
    commit("getProducts", data);
  },
  async getProductByIdAction(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void> {
    commit("startLoading");
    const { data } = await axios.get(
      `${process.env.VUE_APP_API_URL}/components/${id}`
    );
    commit("stopLoading");
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
    components: Array<string>
  ): Promise<void> {
    const { id } = state.productById;
    const token = JSON.parse(localStorage.getItem("userToken") || "");
    const user: User = jwtDecode(token);
    const newProducts = { components: [...(components as string[]), id] };
    const authorization = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.VUE_APP_API_URL}/users/${user.id}`,
      newProducts,
      authorization
    );

    commit("updateProductToCart", data.components);
  },

  async deleteProductToCartAction(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void> {
    const token = JSON.parse(localStorage.getItem("userToken") || "");
    const user: User = jwtDecode(token);
    const beforeComponents = state.user.components;
    const components = beforeComponents.filter(
      (componentId: string) => componentId !== id
    );
    const newUserComponents = {
      components,
    };
    const authorization = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `${process.env.VUE_APP_API_URL}/users/${user.id}`,
      newUserComponents,
      authorization
    );
    commit("updateProductToCart", data.components);
  },
  async buyAllComponentsAction({
    commit,
  }: ActionContext<State, State>): Promise<void> {
    const token = JSON.parse(localStorage.getItem("userToken") || "");
    const user: User = jwtDecode(token);
    const authorization = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const emptyComponents = { components: [] };
    const { data } = await axios.put(
      `${process.env.VUE_APP_API_URL}/users/${user.id}`,
      emptyComponents,
      authorization
    );
    commit("buyAllComponents", data.components);
  },
  toggleNightModeAction({ commit }: ActionContext<State, State>): void {
    commit("toggleNightMode");
  },
};

export default actions;
