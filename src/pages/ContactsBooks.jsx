import ContactForm from '../Component/ContactForm/ContactForm';
import Filter from '../Component/Filter/Filter';
import ContactList from '../Component/ContactList/ContactList';
import contactsOperations from '../redux/private/contacts-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import s from './Pages.module.css'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const ContactsBook = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);

    return (
        <div className={s.Forms}>
        <h1 className={s.PhoneBook}><PhoneIphoneIcon/>Phonebook</h1>
        <ContactForm/>
        <h2 className={s.Contacts}>Contacts</h2>
            <Filter/>
            <ContactList />
        </div>
    )
}

export default ContactsBook;