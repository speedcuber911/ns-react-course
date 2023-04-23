import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigator";
import Todos from "./components/Todos";
import Dictionary, { wordLoader } from "./components/dictionary";
import Form from "./components/Form";
import List from "./components/OptimisedList";
import { Provider } from "react-redux";

import { createStore } from "redux";


const reducer = (state, action) => {
  console.log("Reducer called", action, state);
  if(action.type === 'INCREMENT')  
    return { ...state, initialValue: state.initialValue+1 }
  return state;
}

const initialState = {
  initialValue: 0,
  users: {},
  admins: {}
};

const store = createStore(reducer, initialState)

store.subscribe(() => {
  console.log("Changes to state", store.getState())  
})


setInterval(() => {  
  store.dispatch({
    type: 'INCREMENT'
  })
}, 1000)



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    loader: () => {
      return [
        { componentName: "Todos", path: "/todos" },
        { componentName: "Dictionary", path: "/dictionary" },
        { componentName: "Form", path: "/form" },
        { componentName: "List", path: "/list" },
      ];
    },
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/dictionary/:word",
    element: <Dictionary />,
    loader: wordLoader,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </RouterProvider> */}
  </React.StrictMode>
);


reportWebVitals();

