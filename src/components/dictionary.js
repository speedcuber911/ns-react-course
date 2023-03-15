import { useState } from "react";

function Definition(props) {
  console.log(props.definition);
  return <h4>{props.definition}</h4>;
}

function Dictionary() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const getMeanings = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((x) => x.json())
      .then((x) => {
        setMeanings(x[0].meanings[0].definitions);
      });
  };
  return (
    <div>
      <h1>Dictionary</h1>
      <input
        type="text"
        onChange={(event) => setWord(event.target.value)}
        value={word}
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
