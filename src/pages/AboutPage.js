import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/about.jpg";

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice Sofa" />
        <article>
          <p className="sub-title">About Us</p>
          <h2 className="title">We Are The Leader In The Architectural</h2>
          <p>
            Venture Make Furniture focused on quality, minimalism, and
            functionality. Our mission is to provide a unique set of Furniture
            that fascinate and inspire the user. We review each product, down to
            its packaging, to ensure that we continuously provide the best in
            both quality and design.
          </p>
          <p>
            Our Products are Exported all over the world. Whether from Denmark,
            Japan Or United States. In addition, we are the exclusive North
            American distributor for a number of brands found within our store.
          </p>
          <p>
            We're happy to help. If you have any questions regarding a product
            or an order, please feel free to reach out to us at
            info@venture.com.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 1rem;
    color: var(--clr-grey-5);
  }
  .title {
    font-size: 2.3rem;
    text-align: left;
    line-height: 1.2;
    color: var(--clr-venture-1);
    max-width: 20ch;
  }
  .sub-title {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
