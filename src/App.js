import { MainAppPage } from "./components/mainPage/MainAppPage";
import Car from "./components/Car";
import Form from "./components/Form";
import TodosWithCalc from "./components/todosWithCalc";
import InputTransformer from "./components/InputTransformer";
import List from "./components/OptimisedList";
import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";
import Dictionary from "./components/dictionary";

const fruits = ["Apple", "Banana", "Carrot", "Grapes"];
// React fragment(<> </>) allows you to wrap JSX in one element

// Passing properties to Car

const cars = [
  { name: "A1", brand: "B1", carInfo: { weight: 1000, color: "green" } },
  { name: "A2", brand: "B2", carInfo: { weight: 1200, color: "red" } },
  { name: "A3", brand: "B3", carInfo: { weight: 1500, color: "blue" } },
  { name: "A4", brand: "B4", carInfo: { weight: 1900, color: "gray" } },
];

function TickTackToeBox(props) {
  // isCross = true, render a cross. Else render a O;
  if (props.isCross) return <h1>X</h1>;
  else return <h1>O</h1>;
}

// let myFavCar = cars[0].name;

// State - internal to the component. Whenever there is state changes, the component re-renders
// Props - Which are passed to the component from the parent
function App() {
  const [carName, setCarName] = useState(cars[0].name); // Returns an array of 2 items. First item is the initial state value, second item is a function which is state setter
  // console.log("I am rendering again");
  return (
    <>
      {/* <p>Hi</p>
      <p>Hello</p>
      <input type="text" />
      <p className="">Something inside this</p>
      {cars
        .filter((car) => car.carInfo.weight >= 1500)
        .map(({ name, brand, carInfo }) => (
          <Car name={name} brand={brand} info={carInfo} key={name} />
        ))}
      <button
        onClick={(event) => {
          console.log("Button was clicked", event);
        }}
      >
        Click Me!
      </button>
      <TickTackToeBox isCross={true} />
      <TickTackToeBox isCross={false} /> */}
      {/* <h1> My favourite car is: {carName}</h1>
      {cars.map((car) => (
        <button
          key={car.name}
          onClick={() => {
            console.log("Setting state to", car.name);
            setCarName(car.name);
          }}
        >
          {car.name}
        </button>
      ))} */}
      {/* <Form heading="Form" />
      <hr />
      <Todos heading="Todos" />
      <hr />
      <Dictionary heading="Dictionary" />
      <hr />
      <List heading="List" />
      <hr /> */}
      {/* <TodosWithCalc heading="TodosWithCalc" /> */}
      {/* <MainAppPage /> */}
      <InputTransformer />
    </>
  );
}

export default App;
