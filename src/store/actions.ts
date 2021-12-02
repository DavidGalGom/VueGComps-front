import axios from "axios";
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { commit }: ActionContext<State, State>,
    user: User
  ): Promise<void> {
    await axios.post(`${process.env.VUE_APP_API_URL}/users/register`, user);
  },

  async loginUserAction(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { commit }: ActionContext<State, State>,
    user: User
  ): Promise<void> {
    const { data: token } = await axios.post(
      `${process.env.VUE_APP_API_URL}/users/login`,
      user
    );
    localStorage.setItem("user", JSON.stringify(token.token));
  },
};

export default actions;
