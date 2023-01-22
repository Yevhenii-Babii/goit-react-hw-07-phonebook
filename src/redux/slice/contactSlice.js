import { createSlice } from '@reduxjs/toolkit';
import { fetchApi, addContact, deleteForm } from 'redux/operations';

const contactSlice = createSlice({
  // Ім'я слайсу
  name: 'contact',
  // Початковий стан редюсера слайсу
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  // Об'єкт редюсерів
  extraReducers: {
    [fetchApi.pending](state) {
      state.isLoading = true;
    },
    [fetchApi.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchApi.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteForm.pending](state) {
      state.isLoading = true;
    },
    [deleteForm.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteForm.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

// Редюсер слайсу
export const contactReducer = contactSlice.reducer;
