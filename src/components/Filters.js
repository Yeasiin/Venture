import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    allProducts,
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search Component */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* End Of Search Component */}

          {/* Categories Component */}
          <div className="form-control">
            <h5>Categories</h5>
            <div>
              {categories.map((categori, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${
                    categori.toLowerCase() === category && "active"
                  }`}
                  onClick={updateFilters}
                  name="category"
                  value={categori}
                >
                  {categori}
                </button>
              ))}
            </div>
          </div>
          {/* End Of Categories Component */}

          {/* Company Component */}
          <div className="form-control">
            <h5>company</h5>
            <div>
              <select
                name="company"
                className="company"
                value={company}
                onChange={updateFilters}
              >
                {companies.map((company, index) => (
                  <option key={index} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* End Of Company Component */}

          {/* Colors Component */}
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {colors.map((col, index) => {
                if (col === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      value={col}
                      className={`all-btn ${color === col && "active"}`}
                    >
                      {col}
                    </button>
                  );
                } else {
                  return (
                    <button
                      key={index}
                      name="color"
                      style={{ background: col }}
                      onClick={updateFilters}
                      value={col}
                      className={`color-btn ${color === col && "active"}`}
                    >
                      {col === color && <FaCheck />}
                    </button>
                  );
                }
              })}
            </div>
          </div>
          {/* End Of Colors Component */}

          {/* Price Component */}

          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              min={min_price}
              max={max_price}
              name="price"
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* End Price Component */}

          {/* Shipping Component */}
          <div className="form-control shipping">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* End Shipping Component */}
        </form>
        <button className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    & option {
      text-transform: capitalize;
    }
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
