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
  let child = isSelected ? <b>{contact.name}</b> : <span>{contact.name}</span>;
  return (
    <div className="listContactDiv" onClick={() => onClick(contact)}>{child}</div>
  );
}

export default ContactItem;
