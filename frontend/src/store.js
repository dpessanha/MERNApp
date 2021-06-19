import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  producListtReducer,
  producDetailsReducer,
} from './reducers/productReducers.js';
<<<<<<< HEAD
=======
import { cartReducer } from './reducers/cartReducers.js';
>>>>>>> 823bd5fd6449ba5918067da2c57c341bc2078418

const reducer = combineReducers({
  productList: producListtReducer,
  productDetails: producDetailsReducer,
<<<<<<< HEAD
=======
  cart: cartReducer,
>>>>>>> 823bd5fd6449ba5918067da2c57c341bc2078418
});
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const initialState = {
  cart: { cartItemsFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
