import { useEffect, useState } from "react";
import deleteIcon from "../../assets/delete.png";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    // axios.get(`https://job-finder-server-khaki.vercel.app/job-application?email=${user.email}`, {
    //   withCredentials: true,
    // }).then(res => setJobs(res.data));
    axiosSecure.get(`/job-application?email=${user.email}`)
    .then(res => setJobs(res.data))
  }, [axiosSecure, user.email]);
  return (
    <div className="overflow-x-auto max-w-7xl mx-auto min-h-screen mt-12">
      <table className="table border border-gray-200 rounded-md">
        <thead>
          <tr className="border border-gray-200">
            <th>Job Title</th>
            <th>Category</th>
            <th>Job Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr className="border border-gray-200" key={job._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={job?.company_logo} alt="logo" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job?.title}</div>
                    <div className="text-sm opacity-50">{job?.location}</div>
                  </div>
                </div>
              </td>
              <td className="bg-gray-50">{job?.category}</td>
              <td>{job?.jobType}</td>
              <td className="text-end">
                <button className="cursor-pointer">
                  <img src={deleteIcon} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplications;
