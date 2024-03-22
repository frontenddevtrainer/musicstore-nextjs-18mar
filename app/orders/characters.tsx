"use client";

import { useState } from "react";

const Characters = ({ characters }: { characters: any[] }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      {characters.map((character) => {
        return (
          <p
            onClick={() => {
              setCounter((counter) => counter + 1);
            }}
          >
            {character.name}
          </p>
        );
      })}
    </div>
  );
};
export default Characters;
