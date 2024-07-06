// Since its a part of big store.js file hence name Slice. we will now write all the reducers and actions in this file

// Initial Values Of Our Account State
const accountInitialState = {
  balance: 0,
  loan: 0,
  loanReason: "",
};
// Creating An Reducer Functions To Update The State
const accountReducer = (state = accountInitialState, action) => {
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
        loan: state.loan + action.payload.amount,
        loanReason: action.payload.loanReason,
        balance: state.balance + action.payload.amount,
      };
    case "account/loanPay":
      return {
        ...state,
        loan: 0,
        loanReason: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

// Action Creators
export const deposit = (amount, currency) => {
  // IF we match our default currency we dont neet to convert it So we will return the action
  if (currency === "USD")
    return {
      type: "account/deposit",
      payload: amount,
    };
  // Here Were Converting The Currency So we return Function which intern dispatch actions
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
    );
    const data = await res.json();
    const convertedData = data.rates.USD;
    dispatch({ type: "account/deposit", payload: convertedData });
  };
};
export const withdraw = (amount) => {
  return {
    type: "account/withdraw",
    payload: amount,
  };
};
export const requestLoan = (amount, loanReason) => {
  return {
    type: "account/loanRequest",
    payload: { amount, loanReason },
  };
};
export const payLoan = () => {
  return {
    type: "account/loanPay",
  };
};

export default accountReducer;
