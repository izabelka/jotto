import React from 'react';

/**
* Functional Reeact component for congratulatory message
* @function
* @param {object} props - React props
* @returns {JSX.Element} - Rendered component (or null if `successed` prop is passed)
*/
export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congrats! You guessed the word!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats">
      </div>
    );
  }
}
