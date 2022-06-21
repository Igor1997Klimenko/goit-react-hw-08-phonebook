import { Toolbar, Typography, AppBar } from "@mui/material";
import AuthNav from "Component/AuthNav";
import Navigation from "Component/Navigation";
import UserMenu from "Component/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import s from './Header.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Header = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar>
            <Toolbar>
                <Typography className={s.typoGraf}>
                    <Navigation />
                    <div className={s.MegaMenu}>
                        {isLoggedIn ? (<UserMenu />) : (<AuthNav />)}
                    </div> 
                </Typography>

                <div className={s.Menu} >
                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                        <MenuIcon className={s.ColorIcon} />
                </Button>
                    <Menu
                        className={s.stylerMenu}
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    >
                    <Typography className={s.typoGraf}>
                    {isLoggedIn ? (<UserMenu />) : (<AuthNav />)}
                    </Typography>
                </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
