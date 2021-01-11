import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroWrapper = styled.div`
  width: 100%;
  height: 50vh;
  background: rebeccapurple;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 86px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Helvetica,serif;
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
        <span>HERO</span>
    </HeroWrapper>
  );
}
