export const getContacts = (state) => state.contacts

export const getFilter = (state) => state.filter

export const getVisibleContacts = (state) => {
  const allContacts = getContacts(state)
  const filter = getFilter(state)
  const normalizedFilter = filter.toLowerCase()
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  )
}

export const getModal = (state) => state.modal
