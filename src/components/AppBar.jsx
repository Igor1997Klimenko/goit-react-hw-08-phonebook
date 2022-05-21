import AuthNav from './AuthNav';
import Navigation from "./Navigation";
import UserMenu from "./UserMenu/UserMenu";
import s from './style.module.css';
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selector";

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={s.FormsNav}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}

export default AppBar;