import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";


const UserMenu = () => {

    const name = useSelector(authSelectors.getUsername)
    return (
        <>
            <span>Wellcomen,{name}</span>
            <button type='button'>Выйти</button>
        </>
    )
}

export default UserMenu;