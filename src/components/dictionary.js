import { useState, useEffect, useCallback } from "react";

function Definition(props) {
  console.log(props.definition);
  return <h4>{props.definition}</h4>;
}

// let isCalled = false;

// Performing side-effects
function Dictionary() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [computedVal, setComputedVal] = useState();

  const getMeanings = useCallback(
    (initialWord) => {
      fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${
          word ? word : initialWord
        }`
      )
        .then((x) => x.json())
        .then((x) => {
          setMeanings(x[0].meanings[0].definitions);
        });
    },
    [word, meanings]
  ); // dependencei

  useEffect(() => {
    getMeanings("example");
    /*
      1. If array of dependencies is empty, effect is called only once for first render
      2. If array of dependencies is undefined, effect is called on every re-render
      3. Or with the change of a dependency
    */
  }, []); // Dependencies array

  useEffect(() => {
    setComputedVal(new Array(1e6).fill(1).reduce((acc, el) => acc + el));
  }, []);

  return (
    <div>
      <h1>Dictionary</h1>
      <input
        type="text"
        onChange={(event) => setWord(event.target.value)}
        value={word}
        placeholder={"Example"}
      ></input>
      <button onClick={getMeanings}>Get meaning</button>
      <ol>
        {meanings.map(({ definition }) => (
          <li key={definition}>{<Definition definition={definition} />} </li>
        ))}
      </ol>
    </div>
  );
}

export default Dictionary;
