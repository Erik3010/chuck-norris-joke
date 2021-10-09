import styles from "components/Button/Button.module.scss";

import Spinner from "components/Spinner/Spinner";

const Button = ({ children, loading, ...rest }) => {
  return (
    <button className={styles["button"]} {...rest}>
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
