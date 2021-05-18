import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from './actions';

const reducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
};

export default reducer;
