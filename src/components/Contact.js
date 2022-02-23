import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="content">
          <h3>Join over 10,000 forward thinkers.</h3>
          <p>
            Our customers save time and money with Venture. Leave the heavy
            lifting to us, and take furniture off your to-do list.
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="form-input"
              placeholder="Enter Email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #f4f5f5;
  padding: 7rem 0rem;
  text-align: center;
  @media (max-width: 650px) {
      padding: 5rem 0rem;
    }

  & .content {
    max-width: 50rem;
    margin: 0 auto;

  h3 {
    text-transform: none;
    color: var(--clr-venture-1);
  }
  p {
    line-height: 1.7;
    max-width: 40em;
    margin: 0.5rem auto 0;

    color: var(--clr-venture-1);
  }
  .contact-form {
    @media (max-width: 400px) {
      display: inherit;
    }
    width: 85vw;
    max-width: 500px;
    margin: 2rem auto 0;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    @media (max-width: 400px) {
      margin: 8px 0;
      width: 100%;
      border-radius: 4px !important;
    }
    font-size: 1rem;
    padding: 0.7rem 1rem;
    border: 2px solid var(--clr-venture-1);
  }
  .form-input {
    @media (max-width: 400px) {
      border-right: 2px solid;
      border-radius: var(--radius);
    }
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-venture-1);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: #fff;
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    p {
      margin-bottom: 0;
    }
  }
  @media (max-width: 550px) {
    .content {
      text-align: center;
    }
  }
`;

export default Contact;
