import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { Loading, Error, ProductImages, AddToCart, Stars } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    singleProductLoading: loading,
    singleProductError: error,
    singleProduct: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(url + id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error, history]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="product-back-btn">
          &larr; Back to Products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2 className="title">{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            {stock > 0 && <AddToCart product={product} />}
            <hr />
            <p className="info">
              <span>Available :</span>
              {stock > 0 ? "In Stock" : "Out Of Stock"}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>BRAND :</span>
              {company}
            </p>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  hr {
    margin: 2rem 0;
  }

  .product-back-btn {
    color: var(--clr-venture-1);
    font-weight: 500;
    padding: 1rem 1rem 1rem 0;
  }

  .title {
    text-align: left;
    color: var(--clr-venture-1);
  }

  .price {
    margin: 1rem 0;
    color: var(--clr-venture-1);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
    .price {
      font-size: 1.5rem;
    }
  }
`;

export default SingleProductPage;
