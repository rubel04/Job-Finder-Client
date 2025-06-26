import axios from "axios";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
const SidebarJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://job-finder-server-khaki.vercel.app/jobs")
      .then((data) => setJobs(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <div className="border-t border-gray-300 py-4" key={job._id}>
          <div className="flex items-center space-x-1">
            <img className="w-10" src={job?.company_logo} alt="Shoes" />
            <div>
              <h4 className="text- font-medium text-blue-950">
                {job?.company}
              </h4>
              <p className="flex items-center space-x-1 text-[13px] text-gray-400">
                <IoLocationOutline />
                {job.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarJobs;
