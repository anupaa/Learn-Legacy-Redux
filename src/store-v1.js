import { combineReducers, createStore } from "redux";
// Initial Values Of Our States
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanReason: "",
};
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAT: "",
};

// Creating An Reducer Functions To Update The State
const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/loanRequest":
      return {
        ...state,
        loan: state.loan + action.payload.loan,
        loanReason: action.payload.loanReason,
      };
    case "account/loanPay":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};
const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "account/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAT: action.payload.createdAT,
      };
    default:
      return state;
  }
};

// Since We Have Two Reducers We Need To Combine Them Using CombineReducers

const reducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
// Creating A Store
const store = createStore(reducers);
// Store Gives Us A Function To Dispatch An Action
store.dispatch({ type: "account/deposit", payload: 4500 });
console.log(store.getState());
store.dispatch({ type: "account/withdraw", payload: 500 });
console.log(store.getState());
