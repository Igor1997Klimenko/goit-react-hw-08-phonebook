import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selector";

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <div>
            <Navigation />
            {isLoggedIn ? (<UserMenu />) : (<AuthNav />)}
        </div>
    )
}

export default AppBar;