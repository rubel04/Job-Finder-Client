import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = (props) => {
    const {children} = props || {};
    const {user,loading} = useAuth()
    const {pathname} = useLocation();
    if (loading) {
        return <div className="h-screen flex items-center justify-center"><p className="text-4xl text-red-400">Loading...</p></div>;
    }
    if (user) {
        return children;
    }
    return (
        <div>
            <Navigate to="/signIn" state={pathname}></Navigate>
        </div>
    );
};

export default PrivateRoute;