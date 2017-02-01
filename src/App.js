// @flow
import React from 'react';
import ContactList from './ContactList';

import type {State} from './types/State';
import type {DataStore} from './helpers/createDataStore';

type Props = {
  dataStore: DataStore<State>;
};

function App(props: Props) {
  let {dataStore} = props;
  let {contactList, selectedID} = dataStore.getState();
  let onContactClick = (contact) => {
    dataStore.setState({selectedID: contact.id});
  };
  return (
    <div>
      <h1>Contacts App</h1>
      <ContactList
        contacts={contactList}
        selectedID={selectedID}
        onContactClick={onContactClick}
      />
    </div>
  );
}

export default App;
