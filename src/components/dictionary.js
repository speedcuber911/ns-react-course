import { useLoaderData } from "react-router";

function Definition(props) {
  console.log(props.definition);
  return <h4>{props.definition}</h4>;
}

const getMeanings = async (word) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const responseJSON = await response.json();
  return responseJSON[0].meanings[0].definitions;
};

export async function wordLoader({ params }) {
  const meanings = await getMeanings(params.word);
  return meanings;
}

function Dictionary(props) {
  const meanings = useLoaderData();
  return (
    <div>
      <h1>{props.heading}</h1>      
      <ol>
        {meanings.map(({ definition }) => (
          <li key={definition}>{<Definition definition={definition} />} </li>
        ))}
      </ol>
    </div>
  );
}

export default Dictionary;
