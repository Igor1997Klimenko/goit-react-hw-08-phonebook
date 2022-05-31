import { createSlice } from '@reduxjs/toolkit';
export const toogleContacts = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    contactsFilter: (state, { payload }) => {
      state.filter = payload;      
    }, 
    
    editTodo: (state, { payload }) => {
      
    }
  },
});

export const { contactsFilter } = toogleContacts.actions;
export default toogleContacts.reducer;