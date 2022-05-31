import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "redux/auth/auth-selector";
import s from './Global.module.css';
import HomeIcon from '@mui/icons-material/Home';

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const isActive = ({isActive}) => {return {color: isActive ? 'white' : 'rgb(0 58 86 / 72%)'}}
    return (
        <div className={s.NavAutoriz}>
            <NavLink className={s.LinkHome} style={isActive} to='/'><HomeIcon/>Home</NavLink>
            {isLoggedIn && (
                <NavLink className={s.LinkHome} style={isActive} to='contacts'>Phonebook</NavLink>
            )}
            </div>
    );
};

export default Navigation;