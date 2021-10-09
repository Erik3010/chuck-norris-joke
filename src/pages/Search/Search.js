import Joke from "components/Joke/Joke";

import DefaultLayout from "containers/DefaultLayout/DefaultLayout";

const Search = () => {
  return (
    <DefaultLayout titleLabel="Search Text" title="John Cena">
      {Array(20)
        .fill()
        .map((_, index) => (
          <Joke key={index} joke={`Joke-${index + 1}`} />
        ))}
    </DefaultLayout>
  );
};

export default Search;
