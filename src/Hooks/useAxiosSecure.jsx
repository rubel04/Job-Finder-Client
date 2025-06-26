import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "https://job-finder-server-khaki.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error from axios interceptors");
        if (error.status === 401 || error.status === 403) {
          console.log("need to logout user");
          signOutUser()
            .then((result) => {
              console.log(result);
              navigate("/signIn");
            })
            .catch((err) => {
              console.log(err);
            });
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, signOutUser]);

  return axiosInstance;
};

export default useAxiosSecure;
