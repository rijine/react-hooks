import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import { GlobalContext } from './context/GlobalContext';
import Products from './components/Products';
import { useAuth } from './hooks/useAuth';
import firebase from './config/firebase';
import { useProduct } from './hooks/useProduct';
const LazyMovies = React.lazy(() => import('./components/Movies'));

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return width;
}
const App: React.FC = () => {
  const [name, setName] = useState('Hello');
  const products = [{ id: 1 }, { id: 2 }];
  const cart = [{ id: 1 }];
  const width = useWindowWidth();

  const { loading, user } = useAuth();
  const product = useProduct('DLK3qetYj1jvZRUPWEQA');

  function login() {
    firebase.loginAnonymously();
  }
  const logout = () => {
    firebase.logout();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {name}
      <button onClick={() => setName('Hello World')}> Click me</button>
      <GlobalContext.Provider
        value={{
          products,
          cart,
          user
        }}
      >
        {JSON.stringify({ user, product })}
        <Products />
      </GlobalContext.Provider>

      <div>{width}</div>
      <button onClick={login}>Login </button>
      <button onClick={logout}>Logout </button>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyMovies />
      </Suspense>

      {/* <Suspense fallback={<div>Loading...</div>}>{<Movies />}</Suspense> */}
    </div>
  );
};

export default App;
