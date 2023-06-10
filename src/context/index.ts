import { createContext } from 'react';

export const INITIAL_CONTEXT = {
  image: 'https://robohash.org/hicveldicta.png',
};

const CPContext = createContext(INITIAL_CONTEXT);

export default CPContext;
