import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      const apiUrl = isHome ? `/api/jobs?_page=1&_per_page=3` : `/api/jobs`;
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setJobs(result.data || result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoding(false);
      }
    };
    fetchJob();
    console.log("Hi");
  }, [isHome]);

  console.log(jobs);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {loading ? (
            <div>
              <Spinner loading={loading} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {" "}
              {jobs.map((job) => {
                return <JobListing job={job} key={job.id} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
