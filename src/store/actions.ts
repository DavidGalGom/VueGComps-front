import axios from "axios";
import { ActionContext } from "vuex";
import { State } from "../types/interfaces";

const actions = {
  async getProductsAction({ commit }: ActionContext<State, State>): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/components`);

    commit("getProducts", data);
  },
};

export default actions;
