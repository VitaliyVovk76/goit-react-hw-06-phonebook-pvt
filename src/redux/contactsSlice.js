import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = [
  { id: '1', number: 123, name: 'Piggy' },
  { id: '2', number: 456, name: 'Doggy' },
]

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(name, number) {
        return { payload: { name, number, id: nanoid() } }
      },
    },
    contactDelete(state, action) {
      return state.filter((contact) => contact.id !== action.payload)
    },
  },
})

export const { contactAdded, contactDelete } = contactSlice.actions

export default contactSlice.reducer
