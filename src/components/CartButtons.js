import React from "react";
// import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

import ShoppingCart from "./../assets/shopping-cart.svg";
import UserCircle from "./../assets/user-circle.svg";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { totalItems, clearCart } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <img src={ShoppingCart} alt="" />
          <span className="cart-value">{totalItems}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            logout({ returnTo: window.location.origin });
            clearCart();
          }}
        >
          {/* logout */}
          <img src={UserCircle} alt="" />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          {/* login */}
          <img src={UserCircle} alt="" />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  width: 120px;

  .cart-btn {
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-venture-1);
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 10px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
