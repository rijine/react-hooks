import { GlobalContext } from '../context/GlobalContext';
import { useState, useEffect } from 'react';
import Firebase from '../config/firebase';

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = Firebase.auth.currentUser;
    return {
      loading: !user,
      user
    };
  });

  const onChange = (user: any) => {
    setState({ loading: false, user });
  };

  useEffect(() => {
    const unsubscribe = Firebase.auth.onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return state;
};
