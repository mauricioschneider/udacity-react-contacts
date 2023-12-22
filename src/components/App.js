import { useState } from 'react';
import '../css/App.css';
import ListContacts from './ListContacts';

function App() {
  const removeContact = (contact) => {
    setContacts(contacts.filter(c => c.id !== contact.id));
  }

  const contactsList = [
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "@tylermcinnis",
      avatarURL: "http://localhost:5001/tyler.jpg"
    },
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "@karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg"
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "@richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg"
    }
  ];

  const [contacts, setContacts] = useState(contactsList)

  return (
    <div>
      <ListContacts contacts={contacts} onDeleteContact={removeContact} />
    </div>
  )
}

export default App;
