import { useDispatch, useSelector } from 'react-redux'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ContactForm from './components/ContactForm'
import ContactsList from './components/ContactsList'
import Filter from './components/Filter'
import Container from './components/Container'
import Section from './components/Section'
import Title from './components/Title'
import Button from './components/Button'
import Modal from './components/Modal'
import { toggleModal } from './redux/modalSlice'
import { getModal } from './redux/selectors'

const App = () => {
  const showModall = useSelector(getModal)

  const disputch = useDispatch()

  return (
    <Container>
      <Section>
        <Title text="Phonebook" type="first" />

        <Button
          type="button"
          onClick={() => disputch(toggleModal(showModall))}
          text="Create contact"
          id="create"
        />
        {showModall && (
          <Modal>
            <ContactForm />
          </Modal>
        )}
      </Section>
      <Section>
        <Title text="Contacts" type="second" />
        <Filter />
        <ContactsList />
      </Section>
      <ToastContainer autoClose={3000} />
    </Container>
  )
}

export default App
