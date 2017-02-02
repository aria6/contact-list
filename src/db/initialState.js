// @flow
import type {State} from '../types/State';

const initialState: State = {
  contactList: [
    {
      id: '123',
      name: 'Adi',
      phoneNumber: '08111890000',
      email: 'adi@awesome.com',
    },
    {
      id: '124',
      name: 'Aria',
      phoneNumber: '08999888777',
      email: 'aria@supercool.com',
    },
    {
      id: '125',
      name: 'Domi',
      phoneNumber: '088765543234',
      email: 'domi@ninjacoders.com',
    },
    {
      id: '126',
      name: 'Tepin',
      phoneNumber: '088765543277',
      email: 'tepin@ninjacoders.com',
    },
  ],
  selectedID: null,
  editContactID: null,
  isAdd: false,
};

export default initialState;
