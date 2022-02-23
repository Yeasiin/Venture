import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/venture-hero-bcg.jpg";

const Hero = () => {
  return (
    <Wrapper className=" section-center">
      <article className="content">
        <h1 className="heading">
          Each Project we develop is unique and personal
        </h1>
        <p className="paragraph">
          We Design Pieces Of Furniture And Object That Perfectly Gap Between
          Functionality And Beauty.
        </p>
        <div className="flex">
          <div>
            <h4>500+</h4>
            <p>Total Products</p>
          </div>
          <div>
            <h4>50</h4>
            <p>Crafter</p>
          </div>
          <div>
            <h4>9.0/10</h4>
            <p>User Satisfaction</p>
          </div>
        </div>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} className="main-img" alt="Furniture" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  .paragraph {
    font-weight: 400;
    line-height: 1.6;
    max-width: 45em;
    color: var(--clr-venture-1);
    margin-bottom: 1.5rem;
  }

  .content {
    font-weight: 600;
    padding: 4rem 0;
    color: var(--clr-venture-1);

    .flex {
      display: flex;
      justify-content: space-between;
      max-width: 28em;
      margin-bottom: 1.5rem;
      h4 {
        font-weight: 500;
        margin-bottom: 0.3rem;
        font-size: 1.4rem;
      }
      & > div > p {
        margin: 0;
        font-size: 0.9rem;
        font-weight: 400;
      }
    }
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    .heading {
      margin-bottom: 1rem;
    }
    .hero-btn {
      padding: 0.6rem 1.8rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      justify-self: end;
    }
    .main-img {
      width: 100%;
      height: 530px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
      margin-top: 1rem;
    }
  }
`;

export default Hero;
