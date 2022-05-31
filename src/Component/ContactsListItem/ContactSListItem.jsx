import PropTypes from 'prop-types'; 
import styles from './ContactListItem.module.css';
import { useDeleteContactsMutation, useGetContactsQuery } from '../../redux/contacts-api';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditIcon from '@mui/icons-material/Edit';
import 'react-edit-text/dist/index.css';
import { useCallback, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';


const ContactListItem = ({ id, name, phone }) => {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactsMutation();
    const { data } = useGetContactsQuery();
    const [notes, setNotes] = useState(data,[]);
    const [contactIndex, setContactIndex] = useState(null);
    const [editText, setEditText] = useState('');
    const [editing, setEditing] = useState(false);
    
    const handleEditContact = useCallback((index) => {
        setContactIndex(index)
        setEditing(true)
    }, [])

    const handleSaveContact = useCallback((id) => {
        setEditing(false)
        setContactIndex(null)
        const oldContact = [...notes]
        console.log('first', oldContact)

        const newContact = oldContact.map((contact) => {
            if (contact.id === id) {
                if (editText !== '') {
                    contact.name = editText;
                } else {
                    return contact;
                }
            }
            return contact;
        })
        setNotes(newContact)
    }, [editText, notes])

    
    return(
        <>   
        <span className={styles.NumberContacts}>
            {name}: {phone}
            </span>

            {editing && contactIndex === id ? (
                <div className={styles.Backdroup}>
                <div className={styles.DroupContent}>
                    <div className={styles.DefaultInput}>
                    <input
                        className={styles.InputModal}
                        type="text"
                        defaultValue={name}
                        onChange={e => setEditText(e.target.value)}
                            />
                            
                    <input
                        className={styles.InputModal}
                        type="text"
                        defaultValue={phone}
                        onChange={e => setEditText(e.target.value)}
                    />
                    </div>
                    <button
                        className={styles.ButtonDone}
                        onClick={() => handleSaveContact(id)}
                        type='button'><DoneIcon className={styles.IconDone} /></button>
                </div>
                </div>

            ) : (
                    <div>
                <button
                    onClick={() => handleEditContact(id)}
                    className={styles.EditButton}
                    type='button'>
                <EditIcon className={styles.EditIcon} />
            </button>   
            <button
                className={styles.ButtonsContact}
                type="button"
                onClick={() => deleteContact(id)}>
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