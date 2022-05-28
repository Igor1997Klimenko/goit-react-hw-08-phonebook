import { NavLink } from "react-router-dom";

const AuthNav = () => {
    return (
        <>
            <NavLink to='register'>Регистрация</NavLink>
            <NavLink to='login'>Логин</NavLink>
        </>
    )
}

export default AuthNav;