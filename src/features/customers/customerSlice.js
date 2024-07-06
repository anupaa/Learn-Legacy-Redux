// Since its a part of big store.js file hence name Slice. we will now write all the reducers and actions in this file

// Initial Values Of Our Customer State
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAT: "",
};
// Creating An Reducer Functions To Update The State
const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
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

// Action Creators
export const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
};

export default customerReducer;
