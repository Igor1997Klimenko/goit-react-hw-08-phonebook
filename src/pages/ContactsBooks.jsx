import ContactForm from '../Component/ContactForm/ContactForm';
import Filter from '../Component/Filter/Filter';
import ContactList from '../Component/ContactList/ContactList';
import contactsOperations from '../redux/private/contacts-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContainerContacts } from './styles.component';

const ContactsBook = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);

    return (
        <ContainerContacts>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
            <Filter/>
            <ContactList />
        </ContainerContacts>
    )
}

export default ContactsBook;