import React, { useEffect, useState } from "react";

const Keypad = ({ usedKeys }) => {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    getLetters();
  }, []);

  const getLetters = async () => {
    const response = await fetch("https://my-wordle-api.herokuapp.com/letters");
    const data = await response.json();
    setLetters(data);
  };

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];
          return (
            <div key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
