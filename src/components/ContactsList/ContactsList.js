import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { contactDelete } from '../../redux/contactsSlice'
import { getVisibleContacts } from '../../redux/selectors'
import Button from '../Button'
import s from './ContactsList.module.css'

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts)

  const disputch = useDispatch()

  return (
    <div className={s.contactsWrapper}>
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p>
              {name}: {number}
            </p>
            <Button
              onClick={() => disputch(contactDelete(id))}
              text="Delete"
              id="delete"
              type="button"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactsList
