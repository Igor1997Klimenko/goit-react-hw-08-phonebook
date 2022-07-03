import { NavLink } from "react-router-dom";
import s from './Global.module.css'

const AuthNav = ({closeMenu}) => {
    const isActive = ({isActive}) => {return {color: isActive ? '#19c1d2' : 'rgb(0 58 86 / 72%)'}}
    return (
        <div className={s.NavAutoriz}>
            <div className={s.AutorizProj}>
                <NavLink className={s.LinkHome} onClick={closeMenu} style={isActive} to='register'>Register</NavLink>
                <NavLink className={s.LinkHome} onClick={closeMenu} style={isActive} to='login'>Login</NavLink>
            </div>
        </div>
    )
}

export default AuthNav;