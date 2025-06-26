import axios from "axios";
import Input from "../../components/Shared/Input";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const AddJob = () => {
  const {user}= useAuth()
  const handleAddJob = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const initialData = Object.fromEntries(formData.entries());



    
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split(",")
    newJob.responsibilities = newJob.responsibilities.split(",")

    // console.log(newJob);

    axios.post('https://job-finder-server-khaki.vercel.app/jobs', newJob)
    .then(data=> {
      if (data.data.insertedId) {
        Swal.fire({
          title: "Great!",
          text: "Your job has been submitted successfully.",
          icon: "success",
          timer: "1500"
        })
      }
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="hero min-h-screen py-6">
      <div className="card bg-base-100 w-full max-w-3xl border border-gray-300">
        <div className="card-body">
          <h1 className="text-2xl text-blue-900 text-center font-bold mb-4">
            Add a New Job!
          </h1>
          <form onSubmit={handleAddJob} className="grid grid-cols-2 gap-4">
            <h3 className="text-xl text-blue-900 font-medium col-span-2">
              Job Info :
            </h3>
            {/* job title*/}
            <Input
              type="text"
              name="title"
              placeholder="title"
              label="Job Title"
            ></Input>
            {/* job location*/}
            <Input
              type="text"
              name="location"
              placeholder="Location"
              label="Job Location"
            ></Input>
            {/* job type*/}
            <div className="grid md:grid-cols-3 col-span-2 items-center gap-4">
              <fieldset className="fieldset text-gray-400">
                <label className="text-sm text-blue-900">Job Type*</label>
                <select name="type" className="select text-xs">
                  {/* <option disabled={true}>Select Job Type</option> */}
                  <option>Web development</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Teaching</option>
                </select>
              </fieldset>
              <fieldset className="fieldset text-gray-400">
                <label className="text-sm text-blue-900">Job Category*</label>
                <select name="category" className="select text-xs">
                  <option>Hybrid</option>
                  <option>Remote</option>
                  <option>Part-time</option>
                  <option>Full-time</option>
                  <option>Onsite</option>
                </select>
              </fieldset>
              <Input
                type="date"
                name="applicationDeadline"
                label="Job Application Dateline"
              ></Input>
            </div>
            {/* job salary range*/}
            <div className="grid md:grid-cols-3 col-span-2 items-end gap-4">
              <Input
                label="Job Salary"
                type="text"
                name="min"
                placeholder="Min"
              ></Input>
              <Input type="text" name="max" placeholder="Max"></Input>
              <Input type="text" name="currency" placeholder="Currency"></Input>
            </div>
            {/* job requirements*/}
            <Input
              type="text"
              name="requirements"
              placeholder="requirements"
              label="Job Requirements"
            ></Input>
            {/* job responsibilities*/}
            <Input
              type="text"
              name="responsibilities"
              placeholder="responsibilities"
              label="Job Responsibilities"
            ></Input>
            {/* job description*/}
            <label className="text-sm text-blue-900">Job Description*</label>
            <textarea
              className="w-full h-20 col-span-2 border-gray-300 p-2 placeholder:text-[13px] placeholder:pl-2 rounded"
              name="description"
              placeholder="Description"
              id=""
            ></textarea>
            <div className="divider col-span-2 h-0.5"></div>
            <h3 className="text-xl text-blue-900 font-medium col-span-2">
              Company Info :
            </h3>
            {/* hr name*/}
            <Input
              type="text"
              name="hr_name"
              placeholder="hr_name"
              label="hr name"
            ></Input>
            {/* hr email*/}
            <Input
            defaultValue={user?.email}
              type="text"
              name="hr_email"
              placeholder="hr_email"
              label="hr email"
            ></Input>
            {/* company*/}
            <Input
              type="text"
              name="company"
              placeholder="company"
              label="Company"
            ></Input>
            {/* company logo*/}
            <Input
              type="text"
              name="company_logo"
              placeholder="company logo"
              label="company logo"
            ></Input>
            <button
              type="submit"
              className="col-span-2 text-sm bg-blue-500 p-2.5 rounded cursor-pointer font-medium w-full hover:bg-[#05264e] text-white my-2 transition duration-300 hover:-translate-y-0.5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
