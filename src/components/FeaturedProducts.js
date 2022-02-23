import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    productsLoading: loading,
    productsError: error,
    featuredProducts: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <h2 className="title">Most Popular Items</h2>
      <div className="section-center featured">
        {featured.slice(0, 3).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <Link to="/products" className="btn">
        All Products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  & > {
    .title {
      color: var(--clr-venture-1);
      font-size: 1.5rem;

      @media (min-width: 600px) {
        font-size: 1.7rem;
      }
      @media (min-width: 900px) {
        font-size: 2rem;
      }
    }
  }

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    padding: 0.5rem 1rem;
    width: 160px;
    font-size: 0.9rem;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
