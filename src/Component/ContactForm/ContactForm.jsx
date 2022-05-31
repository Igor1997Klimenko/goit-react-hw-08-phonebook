import {useState, useEffect, memo } from 'react'
import styles from '../ContactForm/ContactForm.module.css'
import { nanoid } from '@reduxjs/toolkit';
import { useAddContactMutation, useGetContactsQuery } from '../../redux/contacts-api';
import { BallTriangle } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const { data: contacts } = useGetContactsQuery();
    const [addContact, { isLoading }] = useAddContactMutation();
    const [formValid, setFormvalid] = useState(false);
    

            useEffect(() => {
        if ( name === '' || phone === '') {
            setFormvalid(true)
        } else {
            setFormvalid(false) 
        }
    }, [name, phone])
  
const handleInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value)
                break;

            case 'phone':
                setPhone(value)
                break;

            default:
                return;
        }
    }
    
const handleSubmit = e => {
    e.preventDefault();
    if(contactExits()){
        alert(`${name} is already in contacts`)
        return;
    }
    addContact({ name, phone, id: nanoid() });
    setName('');
    setPhone('');
    toast.success('Contact added!');
    };
    
    const contactExits = () =>
        contacts.find(contact =>
            contact.name.toUpperCase() === name.toUpperCase() || contact.phone === phone);  

    return(
        <form className={styles.forma} onSubmit={handleSubmit}>
            <div className={styles.blockform}>
                
                    <TextField
                    className={styles.InputForm}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={handleInputChange}              
                />
                
                    <TextField
                    className={styles.InputForm}
                    id="outlined-basic"
                    label="Telephone"
                    variant="outlined"
                    type="number"
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={phone}
                    onChange={handleInputChange}
                    />
            </div>
            <Button
                disabled={formValid}
                type="submit"
                variant="outlined">
                {isLoading ? <BallTriangle color="#00BFFF" height={20} width={20} /> : 'Add contact'}
            </Button>
            <Toaster position="top-right"/>
        </form>
    );
  }


export default memo(ContactForm);