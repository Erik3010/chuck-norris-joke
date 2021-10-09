import styles from "pages/Home/Home.module.scss";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Joke from "components/Joke/Joke";

import ChuckNorris from "assets/images/chuck-norris.png";

import { useState, useEffect } from "react";

import { getJokesCategories, getRandomJokes } from "services/jokes";

import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const [joke, setJoke] = useState({});
  const [isLoadingJoke, setIsLoadingJoke] = useState(false);

  const [isLoadingCategory, setIsLoadingCategory] = useState(false);
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

  const searchHandler = () => {
    history.push({ pathname: "/search", search: `?query=${search}` });
  };

  return (
    <div className={styles["home"]}>
      <div className={styles["home-body"]}>
        <div className={styles["home-search-container"]}>
          <Input
            placeholder="Search jokes by text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={searchHandler}>Search!</Button>
        </div>
        <div className={styles["home-content"]}>
          <div className={styles["home-icon"]}>
            <img
              src={joke.icon_url ?? ChuckNorris}
              alt="chuck-norris"
              className={styles["home-icon"]}
            />
          </div>
          <div className={styles["joke-wrapper"]}>
            <Joke joke={joke.value} />
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
      <div className={styles["home-footer"]}>
        <Input
          placeholder="Search jokes by category"
          autocomplete={true}
          items={categories}
        />
        <Button>Search!</Button>
      </div>
    </div>
  );
};

export default Home;
