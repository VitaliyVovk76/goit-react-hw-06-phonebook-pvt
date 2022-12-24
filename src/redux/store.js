import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './contactsSlice'
import filterReducer from './filterSlice'
import modalReducer from './modalSlice'

export default configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    modal: modalReducer,
  },
})
