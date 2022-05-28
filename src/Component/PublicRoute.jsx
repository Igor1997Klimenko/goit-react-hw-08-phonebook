import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/auth-selector";

const PublicRoute = ({
    children,
    restricted = false,
    ...routeProps
}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldredirect = isLoggedIn && restricted;

    return (   
        <div {...routeProps}>
            {shouldredirect ? <Navigate to='/contacts'/> : children}
        </div>
    );
};

export default PublicRoute;