import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import Body from "./components/Body";
import Projects from "./pages/Projects";
import BlogDetails from "./pages/BlogDetails";
import Dashboard from "./pages/Dashboard";
import About from "./components/About";
import FormComponent from "./components/FormComponent";
import Blog from "./components/Blog";
import ServiceModal from "./components/ServiceModal";

// import reportWebVitals from './reportWebVitals';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/about", element: <About /> },
      { path: "/form", element: <FormComponent /> },
      { path: "/service", element: <ServiceModal /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
