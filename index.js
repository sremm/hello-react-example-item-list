import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function AddPersonForm(props) {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson("");
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const peopleList = arr.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{peopleList}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = ["Some Dude", "Funky Chick"];

function App() {
  return <div />;
}

const el = <ContactManager data={contacts} />;
ReactDOM.render(el, document.getElementById("root"));
