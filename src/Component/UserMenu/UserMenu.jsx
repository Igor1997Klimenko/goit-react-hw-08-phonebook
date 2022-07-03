import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import authOperations from "../../redux/auth/auth-operations";
import s from './UserMenu.module.css';
import { Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = ({closeMenu}) => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

   const handleExitsLogOut = async () => {
       dispatch(authOperations.logOut())
       await closeMenu()
    }
    return (
        <div className={s.Logout}>
            <div className={s.User}><Avatar
                className={s.Avatar}
                sx={{ width: 26, height: 26, background: '#44b1ff', }}
            />
            <span className={s.LogoutWel}> {name}</span>
            </div>
            

            <Button
                className={s.ButtonOut}
                type='button'
                variant="contained"
                onClick={handleExitsLogOut}
            >
                <LogoutIcon/>GoOut
            </Button>
            </div>
    )
}

export default UserMenu;