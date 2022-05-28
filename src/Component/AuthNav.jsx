import { NavLink } from "react-router-dom";
import s from './Global.module.css'

const AuthNav = () => {
    const isActive = ({isActive}) => {return {color: isActive ? 'white' : 'rgb(0 58 86 / 72%)'}}
    return (
        <div>
            <NavLink className={s.LinkHome} style={isActive} to='register'>Регистрация</NavLink>
            <NavLink className={s.LinkHome} style={isActive} to='login'>Логин</NavLink>
        </div>
    )
}

export default AuthNav;