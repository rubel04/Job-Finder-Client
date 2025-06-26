import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/Shared/Input";
import Lottie from "lottie-react";
import lottieRegister from "../../assets/lottie-register.json";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

const Register = () => {
  const { createUser, signInUserWithGoogle } =useAuth()
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const rePassword = form.rePassword.value;
    const newUser = { name, userName, email, password, rePassword };
    setError("");
    if (password.length < 6) {
      setError("Password should be at least 6 characters or longer.");
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should have at least one uppercase.");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~]/.test(password)) {
      setError("Password must includes at least one special characters.");
      return;
    } else if (password !== rePassword) {
      setError("Password and rePassword are not same!");
      return;
    }
    console.log("all validation complete", newUser);

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Your account register successfully.",
            icon: "success",
          });
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };
  const handleGoogleLogin = () => {
    signInUserWithGoogle()
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Your account register successfully.",
            icon: "success",
          });
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="min-h-screen flex justify-evenly items-center">
      <div className="w-1/5">
        <div className="text-center mb-4">
          <span className="text-sm text-blue-500">Register</span>
          <h2 className="text-2xl md:text-4xl font-medium mt-2 mb-1">
            Start For Free Today
          </h2>
          <p className="text-sm text-gray-400">
            Access to all features. No credit card required
          </p>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="text-xs font-medium w-full border border-gray-300 p-3 cursor-pointer my-2 rounded hover:text-blue-500 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl shadow-gray-200"
        >
          Sign up with Google
        </button>
        <form className="p-4 md:p-0" onSubmit={handleRegister}>
          <div className="divider text-sm text-blue-900">Or continue with</div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            label="Full Name"
          ></Input>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            label="Email"
          ></Input>
          <Input
            type="text"
            name="userName"
            placeholder="Your User Name"
            label="User Name"
          ></Input>
          <Input
            type="password"
            name="password"
            placeholder="********"
            label="Password"
          ></Input>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Input
            type="password"
            name="rePassword"
            placeholder="********"
            label="Re-Password"
          ></Input>
          <button
            type="submit"
            className="text-xs font-medium w-full bg-[#05264e] text-white p-3 cursor-pointer my-2 rounded hover:bg-blue-500 transition duration-300 hover:-translate-y-0.5"
          >
            Submit & Register
          </button>
          <p className="text-sm text-gray-400 text-center">
            Already have an account?
            <Link
              className="text-blue-900 hover:text-blue-500 transition duration-200"
              to="/signIn"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <div className="w-1/5">
        <Lottie animationData={lottieRegister}></Lottie>
      </div>
    </div>
  );
};

export default Register;
