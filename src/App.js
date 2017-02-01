// @flow
import React from 'react';
import ContactList from './ContactList';

import type {Contact} from './types/Contact';

let contacts = [
  {
    id: '123',
    name: 'Adi',
    phoneNumber: '08111890000',
    email: 'adi@awesome.com',
  },
  {
    id: '124',
    name: 'Dian',
    phoneNumber: '08999888777',
    email: 'tian@supercool.com',
  },
];

type Props = {
  update: () => void;
};

function App(props: Props) {
  let {dataStore} = props;
  
  let onContactClick = (contact: Contact) => {
    console.log(contact.name, contact.phoneNumber);
  };
  return (
    <div>
      <h1>Contacts App</h1>
      <ContactList contacts={contacts} onContactClick={onContactClick} />
    </div>
  );
}

export default App;
