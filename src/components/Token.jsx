/* eslint-disable prettier/prettier */
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import StyledButtonLarge from './styled/StyledButtonLarge';
import StyledToken from './styled/StyledToken';

function Token() {
  const { value } = useParams();
  const history = useHistory();
  return (
    <StyledToken>
      <div className="head">
        <StyledButtonLarge onClick={() => history.goBack()}>Back</StyledButtonLarge>
      </div>
      <hr />
      <div className="para">
        <h3>Token</h3>
        <p>{value}</p>
      </div>
    </StyledToken>
  );
}

export default Token;
