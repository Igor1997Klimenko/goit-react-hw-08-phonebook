import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "redux/auth/auth-selector";

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <>
            <NavLink to='/'>Home</NavLink>
            {isLoggedIn && (
                <NavLink to='contacts'>Phonebook</NavLink>
            )}
        </>
    );
};

export default Navigation;