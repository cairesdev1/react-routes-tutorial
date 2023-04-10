import React from "react";
import ReactDOM from "react-dom/client";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as destroyAction } from "./routes/destroy";
import EditContact, { action as editAction } from "./routes/edit";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
///////////////////////////////////
import "/index.css";
import ErrorPage from "./error-page";
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! Tivemos um erro aqui piá</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
