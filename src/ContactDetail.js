//@flow
import React from 'react';
import type {Contact} from './types/Contact';

type Props = {
  detailContact: ?Contact;
  editContactID: ?string;
  editContactClick: (?Contact) => void;
  saveEdit: ($Shape<Contact>, string | null) => void;
  isAdd: boolean;
  cancelClick: () => void;
  addContact: ($Shape<Contact>) => void;
  deleteContact: ($Shape<Contact>) => void;
};

let newObj: $Shape<Contact> = {};

function setNewValue(event: {target: {value: string; id: string}}) {
  let newValue = event.target.value;
  let newKey = event.target.id;
  newObj[newKey] = newValue;
}

function ContactDetail(props: Props) {
  let {detailContact, editContactID, editContactClick, saveEdit,
    isAdd, cancelClick, addContact, deleteContact} = props;
  let result;

  if (isAdd) {
    return ContactDetailAdd(cancelClick, addContact);
  }

  // let saveEdit = (newObj) => {
  //   if (detailContact) {
  //     detailContact.name = (newObj.name) ? newObj.name : detailContact.name;
  //     detailContact.phoneNumber = (newObj.phoneNumber) ? newObj.phoneNumber : detailContact.phoneNumber;
  //     detailContact.email = (newObj.email) ? newObj.email : detailContact.email;
  //   }
  //   editContactClick(detailContact);
  // };

  let styleInput = (editContactID, dataContact, idInput) => {
    if (editContactID) {
      return (<input id={idInput} defaultValue={dataContact} onChange={setNewValue} />);
    } else {
      return dataContact;
    }
  };

  let idContent = (detailContact) ? detailContact.id : null;

  let btnName = (editContactID) ? 'Cancel' : 'Edit';
  let btnSave = (editContactID) ? <button onClick={() => saveEdit(newObj, idContent)}>Save</button> : null;
  let btnDelete = (!editContactID) ? <button onClick={() => deleteContact(detailContact)}>Delete</button> : null;

  if (detailContact) {
    result = (
      <div style={{padding: 20}}>
        <div className="contentDetail">
          <div className="contentDetailChild">Nama</div>
          <div className="titikDua">:</div>
          <div className="contentDetailChild">{styleInput(editContactID, detailContact.name, 'name')}</div>
        </div>
        <div className="contentDetail">
          <div className="contentDetailChild">Phone Number</div>
          <div className="titikDua">:</div>
          <div className="contentDetailChild">{styleInput(editContactID, detailContact.phoneNumber, 'phoneNumber')}</div>
        </div>
        <div className="contentDetail">
          <div className="contentDetailChild">Email</div>
          <div className="titikDua">:</div>
          <div className="contentDetailChild">{styleInput(editContactID, detailContact.email, 'email')}</div>
        </div>
        <div style={{paddingTop: 10}}>
          {btnSave}
          <button
            onClick={() => editContactClick(detailContact)}
            >{btnName}</button>
            {btnDelete}
        </div>
      </div>
    );
  } else {
    result = null;
  }

  return result;
}

function ContactDetailAdd(cancelClick: () => void, addContact: () => void) {
  return (
    <div style={{padding: 20}}>
      <div className="contentDetail">
        <div className="contentDetailChild">Nama</div>
        <div className="titikDua">:</div>
        <div className="contentDetailChild">
          <input id="name" placeholder="Name Contact" onChange={setNewValue}></input>
        </div>
      </div>
      <div className="contentDetail">
        <div className="contentDetailChild">Phone Number</div>
        <div className="titikDua">:</div>
        <div className="contentDetailChild">
          <input id="phoneNumber" placeholder="Phone Number" onChange={setNewValue}></input>
        </div>
      </div>
      <div className="contentDetail">
        <div className="contentDetailChild">Email</div>
        <div className="titikDua">:</div>
        <div className="contentDetailChild">
          <input id="email" placeholder="Email" onChange={setNewValue}></input>
        </div>
      </div>
      <div style={{paddingTop: 10}}>
        <button
          onClick={() => addContact(newObj)}
          >Save</button>
        <button
          onClick={cancelClick}
          >Cancel</button>
      </div>
    </div>
  );
}

export default ContactDetail;
export {ContactDetailAdd};
