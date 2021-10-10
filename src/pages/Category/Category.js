import Joke from "components/Joke/Joke";
import Spinner from "components/Spinner/Spinner";

import DefaultLayout from "containers/DefaultLayout/DefaultLayout";

import { useState, useEffect } from "react";
import { getJokesByCategories } from "services/jokes";

import { useHistory } from "react-router-dom";

const Category = ({ match }) => {
  const history = useHistory();

  const [isLoadingJoke, setIsLoadingJoke] = useState(false);
  const [joke, setJoke] = useState({});
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (isNotFound) history.push("/");
    else fetchJokes();
  }, [isNotFound]);

  const fetchJokes = async () => {
    try {
      setIsLoadingJoke(true);
      const result = await getJokesByCategories(match.params.category);
      setJoke(result.data);
    } catch (error) {
      if (error.response.status === 404) {
        alert(`Joke dengan category ${match.params.category} tidak ditemukan`);
        setIsNotFound(true);
      }
    } finally {
      setIsLoadingJoke(false);
    }
  };

  return (
    <DefaultLayout titleLabel="Category" title={match.params.category}>
      {isLoadingJoke ? <Spinner /> : <Joke joke={joke.value} />}
    </DefaultLayout>
  );
};

export default Category;
