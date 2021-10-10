import Joke from "components/Joke/Joke";
import Spinner from "components/Spinner/Spinner";

import DefaultLayout from "containers/DefaultLayout/DefaultLayout";

import { useState, useEffect } from "react";
import { getJokesByCategories } from "services/jokes";

import { useHistory } from "react-router-dom";

const Category = ({ match }) => {
  const history = useHistory();

  const [isLoadingCategory, setIsLoadingJoke] = useState(false);
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      setIsLoadingJoke(true);
      const result = await getJokesByCategories(match.params.category);
      setJoke(result.data);
    } catch (error) {
      if (error.response.status === 404) {
        alert(`Joke dengan category ${match.params.category} tidak ditemukan`);
        history.push("/");
      }
    } finally {
      setIsLoadingJoke(false);
    }
  };

  return (
    <DefaultLayout titleLabel="Category" title="Animal">
      {isLoadingCategory ? <Spinner /> : <Joke joke={joke.value} />}
    </DefaultLayout>
  );
};

export default Category;
