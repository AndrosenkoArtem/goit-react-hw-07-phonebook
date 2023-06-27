import { createSlice } from '@reduxjs/toolkit';
import { persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contactsList: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      if (
        state.contactsList
          .map(contact => contact.name === action.payload.name)
          .includes(true)
      ) {
        alert(`${action.payload.name} is alredy in contacts`);
        return state;
      }
      state.contactsList.push(action.payload);
    },
    deleteContact(state, action) {
      return {
        contactsList: state.contactsList.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

const SetTransform = createTransform((inboundState, key) => {
  if (!inboundState.length) {
    return initialState.contactsList;
  }
  return inboundState;
});

const persistConfig = {
  key: 'contacts',
  storage,
  transforms: [SetTransform],
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
