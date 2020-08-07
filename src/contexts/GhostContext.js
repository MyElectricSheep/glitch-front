import { createContext, useContext } from 'react';

export const GhostContext = createContext();

export const useGhostContext = () => {
    return useContext(GhostContext)
}
