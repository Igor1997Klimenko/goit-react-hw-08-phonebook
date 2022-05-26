import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;  
    } catch (error) {  
      
  };
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {

  };
});
  
  const logOut = createAsyncThunk('auth/logout', async () => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
        
    };
  });

const fetchCurrentContact = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return thunkApi.rejectWithValue();
    };

    token.set(persistToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      
    };
  },
);

  const authOperations = {
    register,
    logIn,
    logOut,
    fetchCurrentContact,
  };

  export default authOperations;
