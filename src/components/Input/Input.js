import styles from "components/Input/Input.module.scss";

import { useState, useEffect, useRef } from "react";

import { ReactComponent as CheveronDown } from "assets/icons/CheveronDown.svg";

const Input = ({ placeholder, autocomplete = false, items }) => {
  const inputRef = useRef(null);

  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);

    if (autocomplete) {
      const filtered = items.filter(
        (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      );

      setFilteredItems(filtered);

      setShowAutocomplete(filtered.length > 0);
    }
  };

  const onClickHandler = (item) => {
    setValue(item);
    setShowAutocomplete(false);
  };

  const closeAutocomplete = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target))
      setShowAutocomplete(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeAutocomplete);

    return () => window.removeEventListener("click", closeAutocomplete);
  }, []);

  return (
    <div className={styles["input-container"]} ref={inputRef}>
      <input
        className={[
          styles["input"],
          autocomplete && styles["has-autocomplete"],
        ].join(" ")}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e)}
      />
      {autocomplete && (
        <div className={styles["input-icon"]}>
          <CheveronDown />
        </div>
      )}
      {autocomplete && showAutocomplete && (
        <div className={styles["autocomplete"]}>
          {filteredItems.map((item) => (
            <div
              key={item}
              className={styles["autocomplete-item"]}
              onClick={() => onClickHandler(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
