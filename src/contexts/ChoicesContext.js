import { createContext, useContext } from 'react';

export const ChoicesContext = createContext();

export const useChoicesContext = () => {
    return useContext(ChoicesContext)
}
