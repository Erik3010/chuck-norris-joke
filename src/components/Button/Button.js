import styles from "components/Button/Button.module.scss";

const Button = ({ children, ...rest }) => {
  return (
    <button className={styles["button"]} {...rest}>
      {children}
    </button>
  );
};

export default Button;
