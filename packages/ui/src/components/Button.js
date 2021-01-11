import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.div`
  
`;

const Button = ({ children }) => {
  return (
    <ButtonWrapper>
      <button>
        {children}
      </button>
    </ButtonWrapper>
  );
};

export default Button;
