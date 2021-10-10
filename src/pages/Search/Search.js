import Joke from "components/Joke/Joke";

import DefaultLayout from "containers/DefaultLayout/DefaultLayout";

import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import { searchJokes } from "services/jokes";
import Spinner from "components/Spinner/Spinner";

const Search = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchQuery = queryParams.get("query");

  const [jokes, setJokes] = useState([]);
  const [isLoadingJokes, setIsLoadingJokes] = useState(false);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      setIsLoadingJokes(true);
      const result = await searchJokes(searchQuery);
      setJokes(result.data.result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingJokes(false);
    }
  };

  return (
    <DefaultLayout titleLabel="Search Text" title={searchQuery}>
      {isLoadingJokes ? (
        <Spinner />
      ) : (
        jokes.map((joke) => <Joke key={joke.id} joke={joke.value} />)
      )}
    </DefaultLayout>
  );
};

export default Search;
