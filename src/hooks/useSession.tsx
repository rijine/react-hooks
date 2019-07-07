import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

export const useSession = (url: string) => {
  const { user } = useContext(GlobalContext);

  return user;
};
