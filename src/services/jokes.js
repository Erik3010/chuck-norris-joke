import axios from "helpers/axios";
import {
  GET_JOKES_BY_CATEGORIES,
  GET_JOKES_CATEGORIES,
  GET_RANDOM_JOKES,
  SEARCH_JOKES,
} from "constant/api/jokes";

export const getRandomJokes = () => {
  return axios.get(GET_RANDOM_JOKES);
};

export const getJokesCategories = () => {
  return axios.get(GET_JOKES_CATEGORIES);
};

export const getJokesByCategories = (category) => {
  return axios.get(GET_JOKES_BY_CATEGORIES(category));
};

export const searchJokes = (query) => {
  return axios.get(SEARCH_JOKES(query));
};
