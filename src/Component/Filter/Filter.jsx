import styles from './Filter.module.css';
import { contactsFilter } from '../../redux/toogleContacts';
import { useDispatch } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch();

    const filterUsers = e => {
        dispatch(contactsFilter(e.currentTarget.value));
    };
    return(
        <label className={styles.LabelForm}>
            <span className={styles.NamesForm}>Find contacts by name</span>
            <input
                type="text"
                name="filter"
                placeholder='filter contacts'
                onChange={filterUsers} 
            />
        </label>
    );
}

export default Filter;