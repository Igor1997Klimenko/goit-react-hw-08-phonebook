import { Toolbar, Typography, AppBar } from "@mui/material";
import AuthNav from "Component/AuthNav";
import Navigation from "Component/Navigation";
import UserMenu from "Component/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import s from './Header.module.css'

const Header = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <AppBar>
            <Toolbar>
                <Typography className={s.typoGraf}>
                    <Navigation />
                    {isLoggedIn ? (<UserMenu />) : (<AuthNav />)}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;