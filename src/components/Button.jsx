import React, { button } from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const { buttonText, handleClick } = this.props;
    return (
      <button type="button" onClick={handleClick}>
        {buttonText}
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
