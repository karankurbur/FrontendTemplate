import React from 'react';
import './App.css';

import Button from './components/Button';
import doPost from './utils/api';

class App extends React.Component {
  handleClick = async (e) => {
    e.preventDefault();
    const response = await doPost('http://localhost:3001/test');
    console.log(response);
  }

  // https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
  render() {
    return (
      <div
        className="App"
        style={{
          // width: '50%',
          // margin: '25%',
          display: 'flex',
          flexDirection: 'space-between',
        }}
      >
        <span>test</span>
        <Button
          buttonText="Smile"
          handleClick={this.handleClick}
          style={{
            flex: 1,
          }}
        />
        <Button
          buttonText="Smile2"
          handleClick={this.handleClick}
          style={{
            flex: 3,
          }}
        />
      </div>
    );
  }
}

export default App;
