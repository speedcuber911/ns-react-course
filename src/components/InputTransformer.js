import { useReducer, useState } from "react";

function Input(props) {
  console.log("Value is", props.value);
  return (
    <>
      <label>Input: </label>
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
      <label>{props.label}: </label>
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

function inputStateReducer(state, action) {
  if (action.type === "UPDATE_INPUT") return action.value;
  return state;
}

function InputTransformer() {
  useReducer();
  const [inputState, dispatch] = useReducer(inputStateReducer, "");
  return (
    <>
      <Input
        value={inputState}
        onChange={(value) => {
          dispatch({
            type: "UPDATE_INPUT",
            value,
          });
        }}
      />
      <br />
      <TransformedInput
        toTransform={inputState}
        transformer={tranformToUpper}
        label="Captialise"
      />
      <br />
      <TransformedInput
        toTransform={inputState}
        transformer={tranformToLower}
        label="SmallCase"
      />
    </>
  );
}
export default InputTransformer;
