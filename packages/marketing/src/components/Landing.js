import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingWrapper = styled.div`
  .hero {
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
  }
  .content {
    margin: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    
    .card {
      width: 100%;
      height: auto;
      
      img {
        width: 100%;
        height: 50%;
      }
    }
  }
  footer {
    background: black;
    color: white;
    padding: 10px
  }
`;

function Copyright() {
  return (
    <div>
      {'Copyright © '}
      <a href="/" color="inherit">
        Your Website
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Landing() {
  return (
    <LandingWrapper>
      <main>
        <div className="hero">
          <span>HERO</span>
        </div>
        <Link to="/pricing">
          <button>Go to Pricing!</button>
        </Link>
        <div className="content">
          {cards.map((card, index) => (
              <div key={index} className="card">
                <img
                  src="https://source.unsplash.com/random"
                  title="Image title"
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
                  <button>
                    View
                  </button>
                  <button>
                    Edit
                  </button>
                </div>
              </div>
          ))}
        </div>
      </main>
      {/* Footer */}
      <footer>
        <p>
          Footer
        </p>
        <p>
          Something here to give the footer a purpose!
        </p>
        <Copyright />
      </footer>
      {/* End footer */}
    </LandingWrapper>
  );
}
