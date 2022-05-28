import { Toolbar, Typography, AppBar } from "@mui/material";
import AuthNav from "Component/AuthNav";
import Navigation from "Component/Navigation";

const Header = () => {
    return (
       
        <AppBar>
            <Toolbar>
                <Typography>
                    <Navigation />
                    <AuthNav/>
            </Typography>
            </Toolbar>
            
        </AppBar>
    )
}

export default Header;