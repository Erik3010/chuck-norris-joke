import styles from "pages/Home/Home.module.scss";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Joke from "components/Joke/Joke";

import ChuckNorris from "assets/images/chuck-norris.png";

import { useState, useEffect } from "react";

import { getJokesCategories, getRandomJokes } from "services/jokes";

import { useHistory } from "react-router-dom";
import Spinner from "components/Spinner/Spinner";

const Home = () => {
  const history = useHistory();

  const [joke, setJoke] = useState({});
  const [isLoadingJoke, setIsLoadingJoke] = useState(false);

  const [, setIsLoadingCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    Promise.all([fetchRandomJoke(), fetchCategories()]);
  }, []);

  const fetchRandomJoke = async () => {
    try {
      setIsLoadingJoke(true);
      const result = await getRandomJokes();
      setJoke(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingJoke(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setIsLoadingCategory(true);
      const result = await getJokesCategories();
      setCategories(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingCategory(false);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();

    history.push({ pathname: "/search", search: `?query=${search}` });
  };

  const searchByCategoryHandler = (e) => {
    e.preventDefault();

    history.push({ pathname: `/category/${category}` });
  };

  return (
    <div className={styles["home"]}>
      <div className={styles["home-body"]}>
        <form
          className={styles["home-search-container"]}
          onSubmit={(e) => searchHandler(e)}
        >
          <Input
            placeholder="Search jokes by text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit">Search!</Button>
        </form>
        <div className={styles["home-content"]}>
          <div className={styles["home-icon"]}>
            <img
              src={joke.icon_url ?? ChuckNorris}
              alt="chuck-norris"
              className={styles["home-icon"]}
            />
          </div>
          <div className={styles["joke-wrapper"]}>
            {isLoadingJoke ? <Spinner /> : <Joke joke={joke.value} />}
          </div>
          <Button
            loading={isLoadingJoke}
            disabled={isLoadingJoke}
            onClick={fetchRandomJoke}
          >
            Another!
          </Button>
        </div>
      </div>
      <form
        onSubmit={searchByCategoryHandler}
        className={styles["home-footer"]}
      >
        <Input
          placeholder="Search jokes by category"
          autocomplete={true}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onAutoComplete={(value) => setCategory(value)}
          items={categories}
        />
        <Button>Search!</Button>
      </form>
    </div>
  );
};

export default Home;
