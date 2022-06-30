/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types'; 
import styles from './ContactListItem.module.css';
import {
    useDeleteContactsMutation,
    useEditPostContactMutation
} from '../../redux/contacts/contacts-api';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditIcon from '@mui/icons-material/Edit';
import 'react-edit-text/dist/index.css';
import { useState, useEffect } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import toast from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const ContactListItem = ({ id, name, number }) => {
    const [editContact] = useEditPostContactMutation();
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactsMutation();
    const [contactIndex, setContactIndex] = useState(null);
    const [editName, setEditName] = useState(name);
    const [editPhone, setEditPhone] = useState(number);
    const [isModal, setIsModal] = useState(false);
    const [formValid, setFormvalid] = useState(false);

     useEffect(() => {
        if (!editName || !editPhone) {
            setFormvalid(false)
        } else {
            setFormvalid(true) 
        }
    }, [editName, editPhone])

    const handleModalClose = e => {
        if (e.keyCode === 27) {
            handleEditContact();
        }
    }

    const exitsModalMouse = (e) => {
        if (e.target === e.currentTarget) {
            handleExitContact();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleModalClose);
            return () => {
        window.removeEventListener('keydown', handleModalClose);
       } 
    }, [handleModalClose]);

    const handleEditContact = (index) => {
        setIsModal(!isModal);
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
            await editContact({ id: id, name: editName, number: editPhone })
        }
    }
    

    return (
        <>
            <span className={styles.NumberContacts}>
                {name}: {number}
            </span>

            {contactIndex ? (
                <div onClick={exitsModalMouse}
                    className={styles.Backdroup}>
                    <form onSubmit={handleSubmitSaveContact}>
                        <div  className={styles.DroupContent}>
                            <div className={styles.DefaultInput}>
                                <input
                                    className={styles.InputModal}
                                    type="text"
                                    value={editName || ''}
                                    onChange={(e) => setEditName(e.target.value)}
                                />
                                <input
                                    className={styles.InputModal}
                                    type="number"
                                    value={editPhone || ''}
                                    onChange={(e) => setEditPhone(e.target.value)}
                                />
                                </div>
                            <button
                                disabled={!formValid}
                                className={styles.ButtonDone}
                                type='submit'>
                                <DoneIcon className={styles.IconDone} />
                            </button>
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
                                <Tooltip title="Edit">
                                <IconButton size="small">
                                    <EditIcon fontSize="small" className={styles.EditIcon} /> 
                                </IconButton>
                                </Tooltip>
                        </button>
                        <button
                            className={styles.ButtonsContact}
                            type="button"
                            onClick={() => handleDeleteContact(id)}>
                            {isDeleting ?
                                <Tooltip title="Delete">
                                <IconButton size="small">
                                    <AutoDeleteIcon fontSize="small" className={styles.IconsRemove} /> 
                                </IconButton>
                                </Tooltip>
                                :
                                <Tooltip title="Delete">
                                <IconButton size="small">
                                    <DeleteIcon fontSize="small" className={styles.IconsDelete}  />
                                </IconButton>
                                </Tooltip>
                            }
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