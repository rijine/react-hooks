import React, { Component, useState, useEffect } from 'react';

/* const RenderCount: React.FC = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(state + 1);
  })
  return <div>Data: {state}</div>;
};
*/
class RenderCount extends Component {
  count = 10;
  render() {
    this.count++;
    return <div>{this.count}</div>;
  }
}
export default RenderCount;
