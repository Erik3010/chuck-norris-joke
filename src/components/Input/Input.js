import styles from "components/Input/Input.module.scss";

const Input = ({ placeholder }) => {
  return (
    <input className={styles["input"]} type="text" placeholder={placeholder} />
  );
};

export default Input;
