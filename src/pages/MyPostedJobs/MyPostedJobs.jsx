import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [myPostedJobs, setMyPostedJobs] = useState([]);
  useEffect(() => {
    axios(`https://job-finder-server-khaki.vercel.app/jobs?email=${user.email}`)
      .then((data) => setMyPostedJobs(data.data))
      .catch((err) => console.log(err));
  }, [user.email]);
  return (
    <div className="overflow-x-auto max-w-7xl mx-auto min-h-screen mt-12">
      <table className="table border border-gray-200 rounded-md">
        <thead>
          <tr className="border border-gray-200">
            <th>No.</th>
            <th>Job Title</th>
            <th>Deadline</th>
            <th>Numbers of Applied</th>
          </tr>
        </thead>
        <tbody>
          {myPostedJobs.map((job, index) => (
            <tr className="border border-gray-200" key={job._id}>
              <td>{index + 1}</td>
              <td>
                <div>
                  <div className="font-bold">{job?.title}</div>
                  <div className="text-sm opacity-50">{job?.location}</div>
                </div>
              </td>
              <td>{job?.applicationDeadline}</td>
              <td className="bg-gray-50 text-blue-500 font-bold">
                {job?.applicationCount}
              </td>
              <td>
                <Link to={`/viewApplications/${job?._id}`}>
                  <button className="text-sm underline cursor-pointer text-blue-500 transition duration-300 hover:-translate-y-0.5">
                    See Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedJobs;
