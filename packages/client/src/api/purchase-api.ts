import { API } from "../constants/routes";

import { Purchase } from "./../utils/types";

import axios from "axios";

export function makePurchaseApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.PURCHASE}`,
  });
}

export async function createPurchase(
  purchaseObject: Purchase,
  api = makePurchaseApi()
) {
  let reqBody: { purchaseObject: Purchase } = {
    purchaseObject: purchaseObject,
  };
  return api.post("", reqBody);
}
