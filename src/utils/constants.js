export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];
export const products_url =
  process.env.REACT_APP_PRODUCT_URL ?? "/.netlify/functions/products";

export const single_product_url =
  process.env.REACT_APP_SINGLE_PRODUCT_URL ??
  `/.netlify/functions/single-product?id=`;
