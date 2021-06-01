import { createContext } from 'react';

const ItemsContext = createContext<any>({
  items: [],
  setItems: () => null,
});

export default ItemsContext;
