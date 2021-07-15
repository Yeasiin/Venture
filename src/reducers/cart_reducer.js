import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }

    case TOGGLE_CART_ITEM_AMOUNT:
      let toggleAmount = state.cart.map((item) => {
        if (action.payload.id === item.id) {
          if (action.payload.value === "inc") {
            item.amount = item.amount + 1;
            if (item.amount > item.max) {
              item.amount = item.max;
            }
          }
          if (action.payload.value === "dec") {
            item.amount = item.amount - 1;
            if (item.amount < 1) {
              item.amount = 1;
            }
          }
        }
        return item;
      });

      return { ...state, cart: toggleAmount };

    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case COUNT_CART_TOTALS:
      const { totalAmount, totalItems } = state.cart.reduce(
        (total, cartItem) => {
          total.totalItems += cartItem.amount;
          total.totalAmount += cartItem.price * cartItem.amount;
          return total;
        },
        { totalAmount: 0, totalItems: 0 }
      );
      return { ...state, totalItems, totalAmount };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
