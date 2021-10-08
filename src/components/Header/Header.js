import styles from "components/Header/Header.module.scss";

import { ReactComponent as ArrowBack } from "assets/icons/ArrowBack.svg";

import { useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className={styles["header"]}>
      {location.pathname !== "/" && (
        <div
          className={styles["header-back-button"]}
          onClick={() => history.goBack()}
        >
          <ArrowBack />
        </div>
      )}
      <div className={styles["header-title"]}>Chuck Norris</div>
    </div>
  );
};

export default Header;
