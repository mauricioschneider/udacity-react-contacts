
import '../css/App.css';
import ListContacts from './ListContacts';

function App() {
  const contacts = [
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

  return (
    <div>
      <ListContacts contacts={contacts} />
    </div>
  )
}

export default App;
