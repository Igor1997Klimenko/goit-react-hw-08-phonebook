import PropTypes from 'prop-types'; 
import styles from './ContactListItem.module.css';
import {
    useDeleteContactsMutation,
    useGetContactsQuery,
    useEditPostContactMutation
} from '../../redux/contacts-api';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditIcon from '@mui/icons-material/Edit';
import 'react-edit-text/dist/index.css';
import { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import toast from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';


const ContactListItem = ({ id, name, phone }) => {
    const [editContact] = useEditPostContactMutation();
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactsMutation();
    const { data } = useGetContactsQuery();
    const [contactIndex, setContactIndex] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formValue, setFormValue] = useState(data);

    const handleEditContact = (index) => {
        setContactIndex(index)
    }

    const handleExitContact = () => {
        setContactIndex(null)
    }

    const handleSubmitSaveContact = e => {
        e.preventDefault()
        setContactIndex(null)
          const contactPhone = {
            name,
            phone,
            completed: false,
            id
          };
        console.log('first', contactPhone)
        editContact(contactPhone);
    }

    const handleDeleteContact = async id => {
        await deleteContact(id)
        toast.error('Contact delete!');
    }

    useEffect(() => {
        if (id) {
            setEditing(true)
            if (data) {
            }
        } else {
            setEditing(false)
        }
    }, [id, data])

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };
    
    return(
        <>   
        <span className={styles.NumberContacts}>
            {name}: {phone}
        </span>

            {editing && contactIndex === id ? (
                <div className={styles.Backdroup}>
                <form name='updateTask' onSubmit={handleSubmitSaveContact}>
                <div className={styles.DroupContent}>
                <div className={styles.DefaultInput}>
                    <input
                        className={styles.InputModal}
                        type="text"
                        defaultValue={name || ''}
                        onChange={handleInputChange}
                            />
                            
                    <input
                        className={styles.InputModal}
                        type="text"
                        defaultValue={phone || ''}
                        onChange={handleInputChange}
                            />
                    </div>
                    <button
                        className={styles.ButtonDone}
                        type='submit'><DoneIcon className={styles.IconDone} /></button>
                            <button
                                type='button'
                                onClick={handleExitContact}
                                className={styles.editModal}
                            ><CloseIcon/></button>     
                    </div>
                </form>
                    
                </div>

            ) : (
                <div className={styles.EditDelete}>
                <button
                    onClick={() => handleEditContact(id)}
                    className={styles.EditButton}
                    type='button'>
                <EditIcon className={styles.EditIcon} />
            </button>   
            <button
                className={styles.ButtonsContact}
                type="button"
                onClick={() => handleDeleteContact(id)}>
                    {isDeleting ?
                        <AutoDeleteIcon className={styles.IconsRemove} /> :
                        <DeleteIcon className={styles.IconsDelete} />}
                </button>
                </div>
            )}
        </>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default ContactListItem;