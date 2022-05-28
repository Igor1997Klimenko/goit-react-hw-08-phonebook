import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import authOperations from "../../redux/auth/auth-operations";
import s from './UserMenu.module.css';
import { Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

   const handleExitsLogOut = () => {
        dispatch(authOperations.logOut())
    }
    return (
        <div className={s.Logout}>
            <div className={s.User}><Avatar
                src="/broken-image.jpg"
                sx={{ width: 26, height: 26 }}
            />
            <span className={s.LogoutWel}> {name}</span>
            </div>
            

            <Button
                type='button'
                variant="contained"
                onClick={handleExitsLogOut}
            >
                goOut
            </Button>
        </div>
    )
}

export default UserMenu;