/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import jwtDecode from "jwt-decode";
import { ActionContext } from "vuex";
import { State, User } from "../types/interfaces";

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
  async getUserCompsByIdAction(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void> {
    const { data } = await axios.get(
      `${process.env.VUE_APP_API_URL}/users/${id}`
    );
    const { userComponents } = data.components;
    commit("getUserCompsById", userComponents);
  },
};

export default actions;
