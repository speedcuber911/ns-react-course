import { useState } from "react";
function Form(props) {
  const [inputVal, setInputVal] = useState("abc");
  const [passVal, setPasVal] = useState("");
  console.log("Re-rendering with -- ", inputVal, passVal);
  return (
    <div>
      <label> Enter user name: </label>
      <input
        type="text"
        value={inputVal}
        onChange={(event) => setInputVal(event.target.value)}
      />

      <label> Enter password: </label>
      <input
        type="password"
        value={passVal}
        onChange={(event) => setPasVal(event.target.value)}
      />
      <button
        onClick={() => {
          if (passVal.length <= 8) {
            alert("Password should be 8 char long");
          } else {
            alert("Success");
            setPasVal("");
            setInputVal("");
          }
        }}
      >
        Login
      </button>
    </div>
  );
}
export default Form;
