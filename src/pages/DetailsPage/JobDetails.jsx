import { Link, useLoaderData } from "react-router-dom";
import { IoCheckmarkCircleOutline, IoLocationOutline } from "react-icons/io5";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { TbCategoryPlus } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import SidebarJobs from "./SidebarJobs";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="my-10 grid grid-cols-12 max-w-7xl mx-auto gap-4">
      <div className="col-span-9 p-6 bg-white rounded border border-gray-300">
        <div className="flex justify-between items-start border-b border-gray-300 pb-4">
          <div className="flex items-center space-x-4">
            <img src={company_logo} alt={company} className="w-16 h-16" />
            <div>
              <h2 className="text-xl font-bold text-blue-950">{company}</h2>
              <p className="flex items-center text-gray-500 text-sm">
                <IoLocationOutline className="mr-1" />
                {location}
              </p>
            </div>
          </div>
          <Link to={`/job/apply/${_id}`}>
            <button className="flex items-center gap-1 text-sm bg-blue-500 py-2.5 px-4 rounded cursor-pointer font-medium hover:bg-[#05264e] text-white my-2 transition duration-300 hover:-translate-y-0.5">
              <IoCheckmarkCircleOutline />
              Apply Now
            </button>
          </Link>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-blue-950">{title}</h3>
          <div className="flex space-x-4 mt-2 text-gray-600 text-sm">
            <p className="flex items-center gap-1">
              <LuBriefcaseBusiness />
              {jobType}
            </p>
            <p className="flex items-center gap-1">
              <TbCategoryPlus />
              {category}
            </p>
          </div>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>

        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-600 flex items-center gap-1">
            <MdAttachMoney /> Salary:{" "}
            <span className="font-semibold">
              {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency.toUpperCase()}
            </span>
          </p>
          <p className="text-gray-600 flex items-center gap-1">
            <IoMdInformationCircleOutline />
            Application Deadline:{" "}
            <span className="font-semibold">{applicationDeadline}</span>
          </p>
        </div>

        <div className="border border-gray-300 rounded p-4 mt-4">
          <div>
            <h4 className="text-md font-semibold text-blue-950">
              Requirements
            </h4>
            <ul className="mt-2 text-gray-600 text-sm list-disc pl-5">
              {requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="text-md font-semibold text-blue-950">
              Responsibilities
            </h4>
            <ul className="mt-2 text-gray-600 text-sm list-disc pl-5">
              {responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="text-md font-semibold text-blue-950">HR Contact</h4>
          <p className="flex items-center text-gray-600 mt-2">
            <FaUserTie className="mr-2" /> {hr_name}
          </p>
          <p className="flex items-center text-gray-600 mt-1">
            <HiOutlineMail className="mr-2" /> {hr_email}
          </p>
        </div>

        <div className="mt-6 flex gap-4 items-center">
          <Link to={`/job/apply/${_id}`}>
            <button className="text-sm bg-blue-500 py-2.5 px-4 rounded cursor-pointer font-medium hover:bg-[#05264e] text-white my-2 transition duration-300 hover:-translate-y-0.5">
              Apply Now
            </button>
          </Link>
          <button className="text-sm font-medium hover:text-white hover:bg-[#05264e] border border-gray-300 bg-white py-2.5 px-4 cursor-pointer my-2 rounded transition duration-300 hover:-translate-y-0.5">
            Save Job
          </button>
        </div>
      </div>
      <div className="col-span-3">
        <div className="border border-gray-300 p-4 rounded">
          <h3 className="text-lg font-medium text-blue-950 pb-2">
            Similar Jobs
          </h3>
          <SidebarJobs></SidebarJobs>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
