import { useState, useReducer } from "react";

function Form(props) {
  const [formState, setFormState] = useState({
    userName: "pariks",
    age: "28",
    password: "pass",
    month: "Jan",
  });


  const handleChange = (event) => {
    const targetVal = event.target.value;
    const targetName = event.target.name;
    setFormState({
      ...formState,
      [targetName]: targetVal,
    });
  };

  console.log("This is formstate", formState);
  return (
    <div>
      <label> Enter user name: </label>
      <input
        type="text"
        value={formState.userName}
        name="userName"
        onChange={handleChange}
      />

      <label> Enter age: </label>
      <input
        type="text"
        name="age"
        value={formState.age}
        onChange={handleChange}
      />

      <label> Enter password: </label>
      <input
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      />

      <label> Select month: </label>
      <select
        value={formState.month}
        onChange={(event) => {
          setFormState({
            ...formState,
            month: event.target.value,
          });
        }}
      >
        <option value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="March">March</option>
      </select>
      <button onClick={() => {}}>Login</button>
    </div>
  );
}
export default Form;
