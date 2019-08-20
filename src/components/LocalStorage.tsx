import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const LocalStorage = () => {
  const [state, setState] = useLocalStorage('info');

  const onChange = (event: any) => {
    setState(event.target.value);
  };

  return (
    <div>
      <input value={state} type="text" onChange={onChange} />
      <p>{state}</p>
    </div>
  );
};

// Stage 2
/* export const LocalStorage = () => {
  const [state, setState] = useState(localStorage.getItem('info') || '');

  useEffect(() => {
    localStorage.setItem('info', state);
    return () => {};
  }, [state]);

  const onChange = (event: any) => {
    setState(state);
  };

  return (
    <div>
      <input value={state} type="text" onChange={onChange} />
      <p>{state}</p>
    </div>
  );
}; */

// Stage 1
/* export class LocalStorage extends React.Component {
  state = {
    value: localStorage.getItem('info') || ''
  };
  componentDidUpdate() {
    localStorage.setItem('info', this.state.value);
  }
  onChange = (event: any) => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} type="text" onChange={this.onChange} />
        <p>{value}</p>
      </div>
    );
  }
} */
