import PropTypes from 'prop-types'; 
import styles from './ContactListItem.module.css';
import { useDeleteContactsMutation } from '../../redux/contacts-api';


const ContactListItem = ({ id, name, phone }) => {
    const [deleteContact, {isLoading: isDeleting}] = useDeleteContactsMutation();
    return(
        <>
        <span className={styles.NumberContacts}>
            {name}: {phone}
        </span>
            <button
                className={styles.ButtonsContact}
                type="button"
                onClick={() => deleteContact(id)}>
                { isDeleting ? <div className={styles.DeleteContact}>Deleting...</div> : 'Delete'}
            </button>
        </>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default ContactListItem;