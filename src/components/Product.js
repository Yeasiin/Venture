import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ image, id, price, name }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <section>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-venture-1);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.7;
  }
  .container:hover .link {
    opacity: 1;
  }
  section {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  section h5 {
    font-size: 1.1rem;
  }
  section h5,
  section p {
    color: var(--clr-venture-1);
    font-weight: 500;
    margin-bottom: 0;
  }

  section p {
    font-size: 1rem;
  }
`;
export default Product;
