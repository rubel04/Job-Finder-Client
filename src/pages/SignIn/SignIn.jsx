import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/Shared/Input";
import lottieSignin from "../../assets/lottie-login.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const SignIn = () => {
  const { signInUser, signInUserWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "You login successfully.",
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
        <Lottie animationData={lottieSignin}></Lottie>
      </div>
      <div className="w-1/5">
        <div className="text-center mb-4">
          <span className="text-sm text-blue-500">Welcome back</span>
          <h2 className="text-2xl md:text-4xl font-medium mt-2 mb-1">
            Member Login
          </h2>
          <p className="text-sm text-gray-400">
            Access to all features. No credit card required
          </p>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="text-xs font-medium w-full border border-gray-300 p-3 cursor-pointer my-2 rounded hover:text-blue-500 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl shadow-gray-200"
        >
          Sign in with Google
        </button>
        <form className="p-4 md:p-0" onSubmit={handleSignIn}>
          <div className="divider text-sm text-blue-900">Or continue with</div>
          <Input
            type="text"
            name="email"
            placeholder="Email Address"
            label="Email"
          ></Input>
          <Input
            type="password"
            name="password"
            placeholder="********"
            label="Password"
          ></Input>
          <button
            type="submit"
            className="text-xs font-medium w-full bg-[#05264e] text-white p-3 cursor-pointer my-2 rounded hover:bg-blue-500 transition duration-300 hover:-translate-y-0.5"
          >
            Login
          </button>
          <p className="text-sm text-gray-400 text-center">
            Dont have an account?
            <Link
              className="text-blue-900 hover:text-blue-500 transition duration-200"
              to="/register"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
