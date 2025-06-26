import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../../components/Shared/JobCard";
import SectionHeading from "../../components/Shared/SectionHeading";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("https://job-finder-server-khaki.vercel.app/jobs")
      .then((data) => setJobs(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="text-center">
        <SectionHeading title={"Hot jobs of the day"} description={"Search and connect with the right candidates faster."} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
