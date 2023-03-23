import { useState } from "react";

function Input(props) {
  return (
    <>
      <label>Input</label>
      <input
        type="text"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      ></input>
    </>
  );
}
function TransformedInput(props) {
  return (
    <>
      <label>TransformedInput</label>
      <input type="text" value={props.transformer(props.toTransform)}></input>
    </>
  );
}

function tranformToUpper(stri) {
  return stri.toUpperCase();
}

function tranformToLower(stri) {
  return stri.toLowerCase();
}

function InputTransformer() {
  const [preTransformed, setPreTransformed] = useState("");
  return (
    <>
      <Input value={preTransformed} onChange={setPreTransformed} />
      <TransformedInput
        toTransform={preTransformed}
        transformer={tranformToUpper}
      />
      <TransformedInput
        toTransform={preTransformed}
        transformer={tranformToLower}
      />
    </>
  );
}
export default InputTransformer;
