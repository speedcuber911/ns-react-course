import { useState, useMemo, useEffect } from "react";

function someExpensiveCalculation(calcVal) {
  console.log("someExpensiveCalculation");
  for (let i = 0; i < 1e9; i++) calcVal += 1;
  return calcVal;
}

function TodosWithCalc({ heading }) {
  const [todos, setTodos] = useState([]);
  const [calcVal, setCalcVal] = useState(0);

  const addTodo = () => {
    setTodos([...todos, "Todo Item"]);
  };

  const increaseCalcVal = () => {
    setCalcVal(calcVal + 1);
  };

  const calulatedExpression = useMemo(
    () => someExpensiveCalculation(calcVal),
    [calcVal]
  );

  return (
    <div>
      <h1>{heading}</h1>
      <div>
        {todos.map((todo, i) => (
          <p key={i}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add item</button>
      </div>
      <hr />
      <div>
        Calculation: {calcVal} and, expensive calc: {calulatedExpression}
        <button onClick={increaseCalcVal}>Increase calcVal</button>
      </div>
    </div>
  );
}
export default TodosWithCalc;
