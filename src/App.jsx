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
import JobPage from "./pages/JobPage";
import { jobLoader } from "./loaders/jobLoader";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

// Add new Job
const addJob = async (newJob) => {
  const res = await fetch(`/api/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newJob),
  });
  return res;
};

//Update job
const updateJob = async (updatedJob) => {
  const res = await fetch(`/api/jobs/${updatedJob.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedJob),
  });
  return res;
};

// Delete Job
const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
  return res;
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
