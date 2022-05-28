import { Link } from "react-router-dom";
import { LinkNav } from "./UserMenu/styles.component";

const Navigation = () => {
    return (
        <>
            <LinkNav><Link to='/'>Home</Link></LinkNav>
            <LinkNav><Link to='Contacts'>Phonebook</Link></LinkNav>
        </>
    )
}

export default Navigation;