import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { contactAdded } from '../../redux/contactsSlice'
import { toggleModal } from '../../redux/modalSlice'
import { getContacts, getModal } from '../../redux/selectors'
import Button from '../Button'
import s from './ContactForm.module.css'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const disputch = useDispatch()
  const showModal = useSelector(getModal)
  const contacts = useSelector(getContacts)

  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      default:
        throw new Error(`Тип поля name ${name} не обрабатывается`)
    }
  }

  const hendleSubmit = (evt) => {
    evt.preventDefault()
    if (name.trim() === '' || number.trim() === '') {
      toast.error(`Enter the form`)
      return
    }
    if (banExistName) {
      toast.error(`${name} is already in contacts`)
      return
    }
    if (name && number) {
      disputch(contactAdded(name, number))
      disputch(toggleModal(showModal))
    }
    reset()
  }

  const reset = () => {
    setName('')
    setNumber('')
  }

  const banExistName = (name) => {
    return contacts.find((contact) => contact.name === name)
  }

  return (
    <>
      {' '}
      <form className={s.form} onSubmit={hendleSubmit}>
        <label className={s.label}>
          <span>Name</span>

          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          <span>Number</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button
          type="submit"
          id="create"
          text="Add contact"
          onClick={hendleSubmit}
        />
      </form>
    </>
  )
}

export default ContactForm
