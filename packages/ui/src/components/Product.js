import React from 'react';
import styled from 'styled-components';
import Button from "./Button";

const ProductWrapper = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 50%;
  }
`;

export default function Product({ index }) {
  return (
    <ProductWrapper>
      <div key={index} className="card">
        <img
          src="https://source.unsplash.com/random"
          title="Image title"
          align="Image title"
        />
        <div>
          <h2>
            Heading
          </h2>
          <p>
            This is a media card. You can use this section to describe
            the content.
          </p>
        </div>
        <div>
          <Button>
            View
          </Button>
          <Button>
            Edit
          </Button>
        </div>
      </div>
    </ProductWrapper>
  );
}
