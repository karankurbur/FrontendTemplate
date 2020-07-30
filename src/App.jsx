import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

import ButtonComponent from './components/Button';
import { doPost } from './utils/api';

class App extends React.Component {
  handleClick = async (e) => {
    e.preventDefault();
    const response = await doPost('http://localhost:3001/test');
    console.log(response);
  }

  // https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
  // https://material-ui.com/components/grid/
  render() {
    // const divStyle = {
    //   backgroundColor: 'DodgerBlue',
    //   padding: '10px',
    //   fontFamily: 'Arial',
    // };

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <ButtonComponent
          buttonText="Smile"
          handleClick={this.handleClick}
          style={{
            flex: 1,
          }}
        />
        <ButtonComponent
          buttonText="Smile2"
          handleClick={this.handleClick}
          style={{
            flex: 3,
          }}
        />

      </Grid>
    );
  }
}

export default App;
