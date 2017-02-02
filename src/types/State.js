// @flow
import type {Contact} from './Contact';

export type State = {
  contactList: Array<Contact>;
  selectedID: ?string;
  editContactID: ?string;
  isAdd: boolean;
};
