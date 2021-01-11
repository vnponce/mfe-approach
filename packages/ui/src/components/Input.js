import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  //color: red;
`;

const Input = ({ label = 'hi:', placeholder = ''}) => {
  return (
    <InputWrapper>
      <label>
        {label}
        <input type="text" value="" placeholder={placeholder} />
      </label>
    </InputWrapper>
  );
};

export default Input;
