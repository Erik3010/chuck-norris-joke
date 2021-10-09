import styles from "pages/Home/Home.module.scss";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Joke from "components/Joke/Joke";

import ChuckNorris from "assets/images/chuck-norris.png";

import { useState, useEffect } from "react";

import { getRandomJokes } from "services/jokes";

const Home = () => {
  const [joke, setJoke] = useState({});
  const [isLoadingJoke, setIsLoadingJoke] = useState(false);

  useEffect(() => {
    fetchRandomJoke();
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

  return (
    <div className={styles["home"]}>
      <div className={styles["home-body"]}>
        <div className={styles["home-search-container"]}>
          <Input placeholder="Search jokes by text" />
          <Button>Search!</Button>
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
          items={[
            "animal",
            "career",
            "celebrity",
            "dev",
            "explicit",
            "fashion",
            "food",
            "history",
            "money",
            "movie",
            "music",
            "political",
            "religion",
            "science",
            "sport",
            "travel",
          ]}
        />
        <Button>Search!</Button>
      </div>
    </div>
  );
};

export default Home;
