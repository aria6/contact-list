// @flow
import React from 'react';
import ContactItem from './ContactItem';

import type {Contact} from './types/Contact';

type Props = {
  contacts: Array<Contact>;
  selectedID: ?string;
  onContactClick: (Contact) => void;
};

const styles = {
  ul: {
    padding: 20,
    margin: 0,
    backgroundColor: '#eee',
  },
};

function ContactList(props: Props) {
  let {contacts, selectedID, onContactClick} = props;
  let children = contacts.map((contact) => {
    return (
      <ContactItem
        key={contact.id}
        contact={contact}
        isSelected={contact.id === selectedID}
        onClick={onContactClick}
      />
    );
  });
  return (
    <ul style={styles.ul}>
      {children}
    </ul>
  );
}

export default ContactList;
