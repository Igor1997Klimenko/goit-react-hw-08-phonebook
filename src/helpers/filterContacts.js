const filterContacts = (contacts, filterValue) => {
    return contacts.filter(({name}) =>
        name.toLowerCase().includes(filterValue.toLowerCase().trim()))
}
export default filterContacts;