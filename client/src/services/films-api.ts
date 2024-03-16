import { ServerApiAdapter } from "@/lib/api";

const api = new ServerApiAdapter(fetch, "TOKEN");

const getFilms = async () => {
  return await api.getFilms();
};

export const filmsApi = {
  getFilms,
};
