import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import authOperations from "redux/auth/auth-operations";


const UserMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(authSelectors.getUsername);

    const btnExitsLogout = () => {
        dispatch(authOperations.logOut())
    }

    return (
        <>
            <span>Wellcomen,{name}</span>
            <button
                type='button'
                onClick={btnExitsLogout}
            >LogOut</button>
        </>
    )
}

export default UserMenu;