import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };

    case SET_GRIDVIEW:
      return { ...state, gridView: true };

    case SET_LISTVIEW:
      return { ...state, gridView: false };

    case UPDATE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];

      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return { ...state, filteredProducts: tempProducts };

    case UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    case FILTER_PRODUCTS:
      const { allProducts } = state;
      const { text, company, category, color, price, shipping } = state.filters;
      let tempFiltered = [...allProducts];

      // Filtering
      // text filtering
      if (text) {
        tempFiltered = tempFiltered.filter((product) =>
          product.name.toLowerCase().includes(text)
        );
      }
      // category filtering
      if (category !== "all") {
        tempFiltered = tempFiltered.filter(
          (product) => product.category === category
        );
      }
      // company filtering
      if (company !== "all") {
        tempFiltered = tempFiltered.filter(
          (product) => product.company === company
        );
      }
      // Colors filtering
      if (color !== "all") {
        tempFiltered = tempFiltered.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }
      // price filtering
      tempFiltered = tempFiltered.filter((product) => product.price <= price);
      // shipping filtering
      if (shipping) {
        tempFiltered = tempFiltered.filter(
          (product) => product.shipping === shipping
        );
      }

      return { ...state, filteredProducts: tempFiltered };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          price: state.filters.max_price,
          color: "all",
          shipping: false,
        },
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
