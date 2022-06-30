import axios from "axios";
import {
    fetchContactsError,
    fetchContactsRequest,
    fetchContactsSuccess
} from "./contacts-actions";

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data));
    } catch (error) {
        dispatch(fetchContactsError(error.message));
    }
}

const contactsOperations = {
    fetchContacts,
}

export default contactsOperations;