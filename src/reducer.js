import { OPEN_SIDEBAR, CLOSE_SIDEBAR, GET_SINGLE_PRODUCT } from './actions';

const reducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_SINGLE_PRODUCT) {
    const { product } = action.payload;
    return { ...state, single_product: product };
  }
};

export default reducer;
