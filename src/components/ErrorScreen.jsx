import React from 'react';
import PropTypes from 'prop-types';

import StyledErrorScreen from './styled/StyledErrorScreen';

function ErrorScreen({ error }) {
  return (
    <StyledErrorScreen>
      <h3>We are sorry...something went wrong</h3>
      <p>We cannot process your request at this moment.</p>
      <p>
        ERROR:
        {error.message}
      </p>
    </StyledErrorScreen>
  );
}

ErrorScreen.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorScreen;
