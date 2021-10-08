import styles from "components/Joke/Joke.module.scss";

const Joke = ({ joke }) => {
  return <div className={styles["joke"]}>"{joke}"</div>;
};

export default Joke;
