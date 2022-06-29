

import PropTypes from 'prop-types'; 
import styles from './ContactListItem.module.css';
import {
    useDeleteContactsMutation,
    useEditPostContactMutation
} from '../../redux/contacts-api';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditIcon from '@mui/icons-material/Edit';
import 'react-edit-text/dist/index.css';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import toast from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';

const ContactListItem = ({ id, name, number }) => {
    const [editContact] = useEditPostContactMutation();
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactsMutation();
    const [contactIndex, setContactIndex] = useState(null);
    const [editName, setEditName] = useState(name);
    const [editPhone, setEditPhone] = useState(number);


    const handleEditContact = (index) => {
        setContactIndex(index)
    }

    const handleExitContact = () => {
        setContactIndex(null)
    }

    const handleDeleteContact = async id => {
            await deleteContact(id)
            toast.error('Contact delete!');
    }

    const handleSubmitSaveContact = async e => {
        e.preventDefault()
        setContactIndex(null)
        if (editName && editPhone) {
            await editContact({ id, editName, editPhone })
        }
    }
        return (
            <>
                <span className={styles.NumberContacts}>
                    {editName}: {editPhone}
                </span>

                {contactIndex ? (
                    <div className={styles.Backdroup}>
                        <form onSubmit={handleSubmitSaveContact}>
                            <div className={styles.DroupContent}>
                                <div className={styles.DefaultInput}>
                                    <input
                                        className={styles.InputModal}
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                    />
                            
                                    <input
                                        className={styles.InputModal}
                                        type="number"
                                        value={editPhone}
                                        onChange={(e) => setEditPhone(e.target.value)}
                                    />
                                </div>
                                <button
                                    className={styles.ButtonDone}
                                    type='submit'><DoneIcon className={styles.IconDone} /></button>
                                <button
                                    type='button'
                                    onClick={handleExitContact}
                                    className={styles.editModal}
                                ><CloseIcon /></button>
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
        number: PropTypes.string.isRequired,
    };

export default ContactListItem;

