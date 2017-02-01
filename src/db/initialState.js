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
      name: 'Dian',
      phoneNumber: '08999888777',
      email: 'dian@supercool.com',
    },
    {
      id: '125',
      name: 'Domi',
      phoneNumber: '088765543234',
      email: 'domi@ninjacoders.com',
    },
  ],
  selectedID: null,
};

export default initialState;
