import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selector";
import { Navigat } from './UserMenu/styles.component'
import { HeaderMenu } from "./UserMenu/styles.component";

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <HeaderMenu>
            <Navigat>
                <Navigation />
            </Navigat>
            
            {isLoggedIn ? (
                    <Navigat><UserMenu /></Navigat>
                ) : (
                    <Navigat><AuthNav /></Navigat>)}
        </HeaderMenu>
    )
}

export default AppBar;