import styles from "pages/Category/Category.module.scss";

import Joke from "components/Joke/Joke";

import DefaultLayout from "containers/DefaultLayout/DefaultLayout";

const Category = () => {
  return (
    <DefaultLayout titleLabel="Category" title="Animal">
      {Array(5)
        .fill()
        .map((_, index) => (
          <Joke key={index} joke={`Joke-${index + 1}`} />
        ))}
    </DefaultLayout>
  );
};

export default Category;
