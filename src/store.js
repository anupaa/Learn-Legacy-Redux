import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice.js";
import customerReducer from "./features/customers/customerSlice.js";
import { thunk } from "redux-thunk";

// Since We Have Two Reducers We Need To Combine Them Using CombineReducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
// Creating A Store
{
  /* While Changing Different Currencies We Need To Depend On API Which Async Call So We Use Thux Middleware */
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// At this time we have created a complete Redux Store. but we have not connected it to our React App. lets do it using react-redux package
