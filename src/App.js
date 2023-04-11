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
import InputWithRef from "./components/inputWithRef";
import Navigation from "./components/Navigator";
import Presenter from "./components/Presenter";

function App() {
  // const [componentName, setComponentName] = useState(null);
  // const handleClick = (componentToLoad) => {
  // setComponentName(componentToLoad);
  // };
  // const componentNameToComponent = [
  //   {
  //     componentName: "Todos",
  //     component: <Todos />,
  //   },
  //   {
  //     componentName: "Dictionary",
  //     component: <Dictionary />,
  //   },
  //   {
  //     componentName: "Form",
  //     component: <Form />,
  //   },
  //   {
  //     componentName: "List",
  //     component: <List />,
  //   },
  // ];

  return (
    <>
      <Navigation
        // handleClick={}
        // navigationItems={}
      />
      {/* <Presenter name={componentName}>
        {getComponentFromComponentName(componentName)}
      </Presenter> */}
      {/*<TodosWithCalc heading="TodosWithCalc" />
      <MainAppPage />
      <InputTransformer />
      <Input/>
      <InputWithRef /> */}
    </>
  );
}

export default App;
