import { API } from "../constants/routes";

import axios from "axios";

export function makeAuthorApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.AUTHOR}`,
  });
}

export async function getAllAuthors(
  page: number = 1,
  limit: number = 8,
  api: any = makeAuthorApi()
) {
  return api.get(`/popular?page=${page}&limit=${limit}`);
}

export async function getAuthorById(
  id: string | null,
  api: any = makeAuthorApi()
) {
  return api.get(`/${id}`);
}
