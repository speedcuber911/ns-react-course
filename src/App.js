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
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import InputWithRef  from "./components/inputWithRef";
import Navigation from "./components/Navigator"
import Presenter from "./components/Presenter"

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
  const [componentName, setComponentName] = useState(null);
  const handleClick = (componentToLoad) => {    
    setComponentName(componentToLoad);
  }
  const componentNameToComponent = [
    {
      componentName: "Todos", 
      component: <Todos/>
    },
    {
      componentName: "Dictionary", 
      component: <Dictionary/>
    },
    {
      componentName: "Form", 
      component: <Form/>
    },
    {
      componentName: "List", 
      component: <List/>
    },
  ];
  const getComponentFromComponentName = (componentName) => componentName? (componentNameToComponent.find(el => (el.componentName === componentName )).component): <></>
  
  return (
    <>
      <Navigation handleClick={handleClick} navigationItems={componentNameToComponent}/>
      <Presenter name={componentName}>
        {getComponentFromComponentName(componentName)}
      </Presenter>          
      {/*<TodosWithCalc heading="TodosWithCalc" />
      <MainAppPage />
      <InputTransformer />
      <Input/>
      <InputWithRef /> */}
    </>
  );
}

export default App;
