import Input from "../../components/Shared/Input";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const JobApply = () => {
  const { user } = useAuth()
  const { id } = useParams();
  const navigate = useNavigate();
  const submitJobApplication = (event) => {
    event.preventDefault();
    const form = event.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const newJobApplication = {
      job_id: id,
      applicant_email: user.email,
      applicant_linkedIn: linkedIn,
      applicant_github: github,
      applicant_resume: resume,
    };
    console.log(newJobApplication);
    axios
      .post("https://job-finder-server-khaki.vercel.app/job-application", newJobApplication)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            title: "Congrats!",
            text: "Your application has been successfully.",
            icon: "success",
          });
          navigate('/myApplications')
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen">
      <div className="card w-full max-w-md border border-gray-300">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">
            Application form
          </h1>
          <form onSubmit={submitJobApplication} className="fieldset">
            <Input
              type="url"
              placeholder="LinkedIn URL"
              name="linkedIn"
              label="LinkedIn URL"
            ></Input>
            <Input
              type="url"
              placeholder="Github URL"
              name="github"
              label="Github URL"
            ></Input>
            <Input
              type="url"
              placeholder="Resume URL"
              name="resume"
              label="Resume URL"
            ></Input>
            <button className="text-xs font-medium bg-[#05264e] text-white p-3 cursor-pointer my-2 rounded hover:bg-blue-500 transition duration-300 hover:-translate-y-0.5">
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
