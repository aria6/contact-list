// @flow
import React from 'react';

import type {Contact} from './types/Contact';

type Props = {
  contact: Contact;
  isSelected: boolean;
  onClick: (Contact) => void;
};

function ContactItem(props: Props) {
  let {onClick, contact, isSelected} = props;
  let child = isSelected ? <u>{contact.name}</u> : <span>{contact.name}</span>;
  return (
    <li onClick={() => onClick(contact)}>{child}</li>
  );
}

export default ContactItem;
