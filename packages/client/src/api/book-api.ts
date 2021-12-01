import { API } from "../constants/routes";

import axios from "axios";

export function makeBookApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.BOOK}`,
  });
}

export async function getAllBooks(
  page: number = 1,
  limit: number = 8,
  api: any = makeBookApi()
) {
  return api.get(`/?page=${page}&limit=${limit}`);
}

export async function getBookById(id: string | null, api: any = makeBookApi()) {
  return api.get(`/${id}`);
}
