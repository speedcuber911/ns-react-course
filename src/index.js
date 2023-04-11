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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader,
//     action: rootAction,
//     children: [
//       {
//         path: "contacts/:id",
//         element: <Contact />,
//         loader: contactLoader,
//       },
//       {
//         path: "contacts/:id/edit",
//         element: <EditContact />,
//         loader: contactLoader,
//       },
//     ],
//   },
// ]);

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
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
