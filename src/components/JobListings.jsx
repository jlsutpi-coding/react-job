import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:8000/jobs`);
        const data = await response.json();
        console.log(data);
        setJobs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoding(false);
      }
    };
    fetchJob();
    console.log("Hi");
  }, []);

  console.log(jobs);
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              <>
                <h2>loading</h2>
              </>
            ) : (
              <>
                {" "}
                {jobs.map((job) => {
                  return <JobListing job={job} key={job.id} />;
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListings;
