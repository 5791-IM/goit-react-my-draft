import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import initialContacts from "../../contactsUser.json";
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFilterChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  const handleResetContacts = () => {
    setContacts(initialContacts);
    return handleResetContacts;
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      <button onClick={handleResetContacts}>Reset Contacts</button>
    </div>
  );
}

// const LOCAL_STORAGE_KEY = "contacts";

// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
//     return savedContacts ? JSON.parse(savedContacts) : initialContacts;
//   });

//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (newContact) => {
//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   };

//   const deleteContact = (contactId) => {
//     setContacts((prevContacts) => {
//       return prevContacts.filter((contact) => contact.id !== contactId);
//     });
//   };

//   const handleFilterChange = (value) => {
//     setFilter(value);
//   };

//   const visibleContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={css.container}>
//       <h1>Phonebook</h1>
//       <ContactForm onAddContact={addContact} />
//       <SearchBox value={filter} onChange={handleFilterChange} />
//       <ContactList contacts={visibleContacts} onDelete={deleteContact} />
//     </div>
//   );
// }
