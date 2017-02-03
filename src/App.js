// @flow
import React from 'react';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

import TextInput from './coreUI/TextInput';

import type {Contact} from './types/Contact';
import type {State} from './types/State';
import type {DataStore} from './helpers/createDataStore';

type Props = {
  dataStore: DataStore<State>;
};

function App(props: Props) {
  let {dataStore} = props;
  let {contactList, selectedID, editContactID} = dataStore.getState();

  let onContactClick = (contact) => {
    if (dataStore.getState().editContactID === null &&
         dataStore.getState().isAdd !== true) {
      dataStore.setState({selectedID: contact.id});
    }
  };

  let editContactClick = (contact) => {
    if (contact) {
      if (dataStore.getState().editContactID !== null) {
        dataStore.setState({editContactID: null});
      } else {
        dataStore.setState({editContactID: contact.id});
      }
    }
  };

  let addContact = (newObj: $Shape<Contact>) => {
    let newContact = {
      id: Math.random().toString(),
      name: newObj.name,
      phoneNumber: newObj.phoneNumber,
      email: newObj.email,
    };
    let oldContact = dataStore.getState().contactList;
    dataStore.setState({
      contactList: [...oldContact, newContact],
      isAdd: false,
    });
  };

  let showForm = () => {
    if (dataStore.getState().editContactID === null) {
      dataStore.setState({
        isAdd: true,
        editContactID: null,
        selectedID: null,
      });
    }
  };
  let cancelClick = () => {
    dataStore.setState({isAdd: false});
  };

  let deleteContact = (detailContact) => {
    /*eslint-disable no-alert, no-console */
    let result = confirm(`Are you sure want to delete this contact?`);
    /*eslint-enable no-alert */
    if (result) {
      let contactList = dataStore.getState().contactList;

      let newTodoList = contactList.filter((rItem) => {
        return (rItem !== detailContact);
      });
      dataStore.setState({contactList: newTodoList});
    }
  };

  let saveEdit = (newObj, id) => {
    let updateContact = dataStore.getState().contactList.map((contactItem) => {
      if (contactItem.id === id) {
        return {
          id: contactItem.id,
          name: (newObj.name) ? newObj.name : contactItem.name,
          phoneNumber: (newObj.phoneNumber) ? newObj.phoneNumber : contactItem.phoneNumber,
          email: (newObj.email) ? newObj.email : contactItem.email,
        };
      } else {
        return contactItem;
      }
    });
    dataStore.setState({
      contactList: updateContact,
      editContactID: null,
    });
  };

  let searchValue = (event: {target: {value: string}}) => {
    dataStore.setState({
      searchText: event.target.value,
    });
  };

  let contentSearch = contactList.filter((contactItem) => {
    let searchText = dataStore.getState().searchText;
    if (searchText) {
      if (contactItem.name.toLowerCase().includes(searchText.toLowerCase())) {
        return contactItem;
      }
    }
  });

  if (dataStore.getState().searchText) {
    contactList = contentSearch;
  }

  let detailContact = contactList.find((contact) => {
    return (selectedID === contact.id);
  });

  let onTextChange = (text: string) => {
    // return text;
    console.log(text);
  };

  return (
    <div>
      <div>
        <div className="header"><h1>Contacts App</h1></div>
        <div className="headerButton">
          <button
            onClick={showForm}
            >Add Contact</button>
            <TextInput
              isMultiline={false}
              onTextChange={onTextChange}
              isAttribute={{placeholder: 'Tes'}}
            />
            <input
              placeholder="Search"
              onChange={searchValue}
              ></input>
        </div>
        <div className="wrapper">
          <div className="contactList">
            <ContactList
              contacts={contactList}
              selectedID={selectedID}
              onContactClick={onContactClick}
            />
          </div>
          <div className="contactDetail">
            <ContactDetail
              detailContact={detailContact}
              editContactID={editContactID}
              editContactClick={editContactClick}
              saveEdit={saveEdit}
              isAdd={dataStore.getState().isAdd}
              cancelClick={cancelClick}
              addContact={addContact}
              deleteContact={deleteContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
