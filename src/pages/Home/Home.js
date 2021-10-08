import styles from "pages/Home/Home.module.scss";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Joke from "components/Joke/Joke";

import ChuckNorris from "assets/images/chuck-norris.png";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <div className={styles["home-body"]}>
        <div className={styles["home-search-container"]}>
          <Input placeholder="Search jokes by text" />
          <Button>Search!</Button>
        </div>
        <div className={styles["home-content"]}>
          <img src={ChuckNorris} alt="chuck-norris" />
          <div className={styles["joke-wrapper"]}>
            <Joke joke="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          </div>
          <Button>Another!</Button>
        </div>
      </div>
      <div className={styles["home-footer"]}>
        <Input placeholder="Search jokes by category" />
        <Button>Search!</Button>
      </div>
    </div>
  );
};

export default Home;
