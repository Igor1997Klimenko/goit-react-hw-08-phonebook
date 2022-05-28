import ContactListItem from '../ContactsListItem/ContactSListItem';
import s from './ContactList.module.css';
import filterContacts from '../../helpers/filterContacts';
import { useGetContactsQuery } from '../../redux/contacts-api';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const { data } = useGetContactsQuery();
    const filterValue = useSelector((state) => state.contacts.filter)

    return(
        <ul className={s.ContactList}>
            {data &&
                filterContacts(data, filterValue).map(({ id, name, phone }) => (
        <li className={s.ItemContacts} key={id}>
            <ContactListItem
                id={id}
                name={name}
                phone={phone}
            />
        </li>          
    ))}
    </ul>
    )
}

export default ContactList;