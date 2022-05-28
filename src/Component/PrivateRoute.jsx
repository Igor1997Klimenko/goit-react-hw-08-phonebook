import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/auth-selector";

const PrivateRoute = ({
    children,
    ...routeProps
}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <div {...routeProps}>
            {isLoggedIn ? children : <Navigate to="/login" />}
        </div>
    );
};

export default PrivateRoute;