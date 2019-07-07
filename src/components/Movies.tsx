import React from 'react';
import { useFetchSuspense } from '../hooks/useFetchSuspense';

const Movies: React.FC = () => {
  // const data = useFetchSuspense('https://reqres.in/api/users?page=2');
  const data = true;
  return <div>{JSON.stringify(data)}</div>;
};

export default Movies;
