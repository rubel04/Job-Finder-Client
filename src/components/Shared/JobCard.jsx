import { IoLocationOutline } from "react-icons/io5";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { TbCategoryPlus } from "react-icons/tb";
import active from "../../assets/active.png";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  const { job } = props || {};
  return (
    <div className="card flex-grow group p-4 bg-[#d5e8f743] border border-[#b8bdc366] transition hover:-translate-y-0.5 duration-300 hover:bg-white">
      <div className="relative">
        <div className="flex items-center space-x-1">
          <img className="w-14" src={job?.company_logo} alt="Shoes" />
          <div>
            <h4 className="text-lg font-medium text-blue-950">
              {job?.company}
            </h4>
            <p className="flex items-center space-x-1 text-[13px] text-gray-400">
              <IoLocationOutline />
              {job.location}
            </p>
          </div>
        </div>
        {
            job?.status =="active" && <img className="absolute top-0 right-0" src={active} alt="status" />
        }
      </div>
      <div className="my-4">
        <h4 className="text-base font-medium text-blue-950">{job?.title}</h4>
        <div className="flex space-x-4 mt-1">
          <p className="flex items-center gap-1 text-[13px] text-gray-400">
            <LuBriefcaseBusiness />
            {job.jobType}
          </p>
          <p className="flex items-center gap-1 text-[13px] text-gray-400">
            <TbCategoryPlus />
            {job.category}
          </p>
        </div>
      </div>
      <p className="text-[13px] text-gray-500 font-[480px] my-4">
        {job.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {job?.requirements.map((requirement, idx) => (
          <p
            className="text-[13px] text-gray-600 hover:text-blue-500 bg-[#deebf68a] px-3 py-1 rounded-md transition cursor-pointer"
            key={idx}
          >
            {requirement}
          </p>
        ))}
      </div>
      <div className="card-actions justify-end mt-auto">
        <Link to={`/jobs/${job._id}`}>
        <button className="text-xs font-[480px] bg-[#cce3f5] text-blue-500 px-3 py-2 cursor-pointer my-2 rounded group-hover:bg-blue-500 group-hover:text-white transition duration-300 hover:-translate-y-0.5">
          Apply Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
