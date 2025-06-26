import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex items-center justify-center">
      <div>
        <h2 className="text-7xl text-center font-medium">404</h2>
        <p className="text-center">Page not found</p>
        <Link
         to='/' className="bg-[#59C6D2] flex justify-center text-white py-1 mt-4 px-4 rounded-lg">Back to Home</Link>
      </div>
    </div>
    );
};

export default ErrorPage;