import styled from "styled-components";

import iconHighQuality from "./../assets/icon-high-quality.svg";
import iconWarranty from "./../assets/icon-warranty.svg";
import iconShipping from "./../assets/icon-shipping.svg";
import iconSupport from "./../assets/icon-support.png";

function Features() {
  return (
    <Wrapper className="section section-center">
      <div className="flex">
        <div className="feature-item">
          <img src={iconHighQuality} alt="" />
          <div>
            <h4>High Quality</h4>
            <p>Crafted from top materials</p>
          </div>
        </div>
        <div className="feature-item">
          <img src={iconWarranty} alt="" />
          <div>
            <h4>Warranty Protection</h4>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className="feature-item">
          <img src={iconShipping} alt="" />
          <div>
            <h4>Free Shipping</h4>
            <p>Over $400</p>
          </div>
        </div>
        <div className="feature-item">
          <img src={iconSupport} alt="" />
          <div>
            <h4>24 / 7 Support</h4>
            <p>Dedicated Support</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (max-width: 800px) {
    padding: 0;
  }

  padding: 5rem 0;

  .flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: var(--clr-venture-1);

    & > .feature-item {
      min-width: 250px;
      max-width: 250px;
      display: flex;
      align-items: center;
      gap: 1.3rem;
      padding: 0.7rem;

      & img {
        width: 30px;

        @media (min-width: 800px) {
          width: 35px;
        }
        @media (min-width: 1200px) {
          width: 40px;
        }
      }

      & h4 {
        color: var(--clr-venture-1);
        font-size: 0.8rem;
        margin-bottom: 0.3rem;

        @media (min-width: 800px) {
          font-size: 0.9rem;
        }
        @media (min-width: 1200px) {
          font-size: 1rem;
        }
      }
      & p {
        margin: 0;
        font-size: 0.9rem;
      }
    }

    @media (min-width: 992px) {
    }
  }
`;

export default Features;
