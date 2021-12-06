import axios from "axios";
import { Commit } from "vuex";
import configActionContext from "../test-utils";
import actions from "@/store/actions";
import { Product, User } from "@/types/interfaces";
import mockedState from "../stateMock";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest.MockedFunction<Commit>;

describe("Given actions ", () => {
  describe("When getProductsAction is summoned", () => {
    test("Then it should call commit with getProducts and data", async () => {
      const data: Array<Product> = mockedState.products;
      mockedAxios.get.mockResolvedValue({ data });

      await actions.getProductsAction(configActionContext(commit));

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("getProducts", data);
    });
  });

  describe("When getProductByIdAction is summoned", () => {
    test("Then it should call commit with getProductById and data", async () => {
      const data: Product = mockedState.productById;
      mockedAxios.get.mockResolvedValue({ data });
      const id = "12345";

      await actions.getProductByIdAction(configActionContext(commit), id);

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("getProductById", data);
    });
  });

  describe("When the logoutUserAction is summoned", () => {
    test("Then it should call commit with logoutUser", async () => {
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

      await actions.logoutUserAction(configActionContext(commit));

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("logoutUser", loggedUser);
    });
  });
});
