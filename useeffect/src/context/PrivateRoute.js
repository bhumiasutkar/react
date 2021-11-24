import { Navigate } from "react-router";
import AuthContext from "./auth-context";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Roles } from "../context/Roles";

const PrivateRoute = ({ authComponent: Component, roles, ...rest }) => {
    const ctx = useContext(AuthContext);
    const isLoggedIn = ctx.isLoggedIn;

    if (isLoggedIn) {
        return <authComponent />;
    } if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }


};

export default PrivateRoute;