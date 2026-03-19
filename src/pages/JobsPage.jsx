import React, { useEffect } from "react";
import JobListings from "../components/JobListings";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const JobsPage = () => {
  const locationR = useLocation();

  useEffect(() => {
    if (locationR.state?.deleted) {
      toast.success("Job Deleted successfully!");
    }
    if (locationR.state?.added) {
      toast.success("Job Added successfully!");
    }
  }, [locationR]);
  return (
    <section className=" bg-blue-50 px-4 py-6">
      <JobListings />
    </section>
  );
};

export default JobsPage;
