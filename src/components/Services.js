import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import featuredImage from "./../assets/featured-img.jpg";

const Services = () => {
  return (
    <Wrapper className="section section-center">
      <div className="flex">
        <img src={featuredImage} alt="" />
        <div className="featured-content">
          <h3>Zero to fully furnished in as little as a week.</h3>
          <p>
            Feather furniture is available to be delivered and assembled in New
            York City, Los Angeles, San Francisco, Austin, Houston, Dallas, Fort
            Worth, and the Washington DC area.
          </p>
          <Link to="/products">Explore Furniture</Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: none;

  @media (min-width: 992px) {
    display: block;
  }

  .flex {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    align-items: center;

    & > * {
      flex-basis: 100%;
    }

    & > .featured-content {
      & > h3 {
        max-width: 24ch;
        color: var(--clr-venture-1);
      }
      & > p {
        margin: 1rem 0;
        color: var(--clr-venture-1);
      }
      & > a {
        color: var(--clr-venture-1);
        font-weight: 500;
        text-decoration: underline;
        padding: 1rem 0;
        font-size: 1.2rem;
        color: var(--clr-venture-2);
      }
    }
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    /* padding: 0; */
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
