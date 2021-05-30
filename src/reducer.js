import {
  TOGGLE_SIDEBAR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  GET_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
  TOGGLE_CART_MODAL,
  CLEAR_CART,
  COUNT_CART_VAT,
  COUNT_GRAND_TOTAL,
  TOGGLE_CHECKOUT_MODAL,
} from './actions';

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: false,
      single_product: action.payload.product,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_error: true,
      single_product_loading: false,
    };
  }
  if (action.type === TOGGLE_CART_MODAL) {
    return { ...state, isCartModalOpen: !state.isCartModalOpen };
  }
  if (action.type === ADD_TO_CART) {
    const { id, amount, price, name, image, cartImage, slug } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          const newAmount = cartItem.amount + amount;
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = { id, name, amount, price, image, cartImage, slug };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === GET_CART_TOTALS) {
    const { total_price, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_amount += amount;
        total.total_price += amount * price;
        return total;
      },
      {
        total_amount: 0,
        total_price: 0,
      }
    );
    return { ...state, total_amount, total_price };
  }
  if (action.type === COUNT_CART_VAT) {
    const calculatedVAT = state.total_price * 0.2;
    return { ...state, VAT: calculatedVAT };
  }
  if (action.type === COUNT_GRAND_TOTAL) {
    const grandTotal = state.total_price + state.shipping;
    return { ...state, grand_total: grandTotal };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === id) {
          if (value === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (value === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CHECKOUT_MODAL) {
    return { ...state, isCheckoutModalOpen: !state.isCheckoutModalOpen };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
