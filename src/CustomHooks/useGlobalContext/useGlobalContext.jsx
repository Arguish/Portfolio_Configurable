import { useContext } from 'react';
import { GlobalContext } from '../../Context/Global';

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
