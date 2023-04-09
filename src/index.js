import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader, rootAction } from "./routes/root";
import ErrorPage from "./routes/ErrorRoute";
import Contact, { contactLoader } from "./routes/Contact";
import EditContact from "./routes/EditContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader,
    action: rootAction,
    children: [
      {
        path: "contacts/:id",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:id/edit",
        element: <EditContact />,
        loader: contactLoader,
      },
    ],
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
