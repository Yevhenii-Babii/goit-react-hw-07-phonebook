import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63c932a9c3e2021b2d51af08.mockapi.io';
export const fetchApi = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const responce = await axios.get('/contacts');
    console.log(thunkAPI);
    return responce.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const responce = await axios.post('/contacts', contact);
    console.log(thunkAPI);
    return responce.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export const deleteForm = createAsyncThunk('contacts/deleteForm', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
      return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});