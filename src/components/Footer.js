import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoLight from "./../assets/venture-light.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <Link to="/">
          <img src={logoLight} className="venture-light" alt="Venture" />
        </Link>

        <p className="logo-title">crafted with excellent wood</p>
        <hr />
        <div className="flex">
          <p>&copy; {new Date().getFullYear()} Venture. All Rights Reserved</p>
          <p className="author">
            Made with ❤ by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/yeasiin"
            >
              Yeasin Arfat
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--clr-venture-1);
  padding: 2rem 0 0;

  & > .section-center {
    text-align: center;

    & > a > .venture-light {
      width: 150px;
      @media (max-width: 776px) {
        width: 100px;
      }
    }

    & > .logo-title {
      text-transform: capitalize;
      margin-bottom: 2rem;

      @media (max-width: 776px) {
        font-size: 0.9rem;
      }
    }

    & > .flex {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      & > p {
        font-size: 0.8rem;
      }
      & > .author {
        display: none;
      }
    }
  }

  & p {
    color: #fff;
    margin: 0;
  }
  & a {
    display: inline-block;
    cursor: pointer;
    color: #d7def5;
  }

  @media (min-width: 776px) {
    flex-direction: column;
    .author {
      display: inline-block !important;
    }
  }
`;

export default Footer;
