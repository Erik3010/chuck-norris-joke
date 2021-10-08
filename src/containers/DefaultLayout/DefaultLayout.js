import styles from "containers/DefaultLayout/DefaultLayout.module.scss";

import ChuckNorris from "assets/images/chuck-norris.png";

const DefaultLayout = ({ children, titleLabel, title }) => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["layout-header"]}>
        <img src={ChuckNorris} alt="chuck-norris" />
        <div className={styles["layout-title"]}>
          {titleLabel}: {title}
        </div>
      </div>
      <div className={styles["layout-content"]}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
