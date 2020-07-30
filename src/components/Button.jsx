import React from 'react';

export default class Button extends React.Component {
  render() {
    const { hello } = this.state;
    return (<div>{hello}</div>);
  }
}
