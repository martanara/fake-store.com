import React from 'react';

import { StyledErrorMessage } from './ErrorMessage.styles';

const ErrorMessage = (props: any) => {
  return (
    <StyledErrorMessage>{props.children}</StyledErrorMessage>
  )
}

export default ErrorMessage;