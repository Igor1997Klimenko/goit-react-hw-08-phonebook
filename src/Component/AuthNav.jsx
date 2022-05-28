import { NavLink } from "react-router-dom";
import { Project, Obzerver } from "./UserMenu/styles.component";

const AuthNav = () => {
    return (
        <Obzerver>
            <Project><NavLink to='register'>Регистрация</NavLink></Project>
            <Project><NavLink to='login'>Логин</NavLink></Project>
        </Obzerver>
    )
}

export default AuthNav;