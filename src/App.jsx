import React from "react";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="jobs/:id" element={<JobPage />} loader={jobLoader} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
