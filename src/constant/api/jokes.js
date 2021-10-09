import { BASE_API_URL } from "constant/api";

export const GET_RANDOM_JOKES = `${BASE_API_URL}/jokes/random`;
export const GET_JOKES_CATEGORIES = `${BASE_API_URL}/jokes/categories`;
export const GET_JOKES_BY_CATEGORIES = (category) =>
  `${BASE_API_URL}/jokes/random?category=${category}`;
export const SEARCH_JOKES = (query) =>
  `${BASE_API_URL}/jokes/search?query=${query}`;
