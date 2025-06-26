import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applications = useLoaderData();
  // console.log(applications);

  const handleUpdateStatus = (e,id) =>{
    const data = {
      status: e.target.value
    }

    axios.patch(`https://job-finder-server-khaki.vercel.app/job-application/${id}`, data)
    .then(data => {
      if (data.data.modifiedCount) {
        Swal.fire({
          title: "Status has been updated",
          icon: "success",
          timer: 1500
        })
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto min-h-screen mt-12">
      <table className="table border border-gray-200 rounded-md">
        <thead>
          <tr className="border border-gray-200">
            <th>No.</th>
            <th>Email</th>
            <th>Link</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr className="border border-gray-200" key={application._id}>
              <td>{index + 1}</td>
              <td>
                <div>
                  <div className="font-bold">
                    {application?.applicant_email}
                  </div>
                </div>
              </td>
              <td title={application.applicant_resume}>
                <button className="btn">Resume</button>
              </td>
              <td>
                <select onChange={(e) => handleUpdateStatus(e,application._id)} defaultValue={application.status || "Change Status"} className="select select-sm">
                  <option disabled={true}>Change Status</option>
                  <option>Under Review</option>
                  <option>Set Interview</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplication;
