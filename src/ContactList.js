// @flow
import React from 'react';

import type {Contact} from './types/Contact';

type Props = {
  contacts: Array<Contact>;
  onContactClick: (Contact) => void;
};

function ContactList(props: Props) {
  let {contacts, onContactClick} = props;
  let children = contacts.map((contact) => {
    return <li key={contact.id} onClick={() => onContactClick(contact)}>{contact.name}</li>;
  });
  return (
    <ul>
      {children}
    </ul>
  );
}

export default ContactList;
