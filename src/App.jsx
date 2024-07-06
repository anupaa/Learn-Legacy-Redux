import { useSelector } from "react-redux";
import "./App.css";
import CreateCustomer from "./features/customers/CreateCustomer.jsx";
import Customer from "./features/customers/Customer.jsx";
import AccountOperations from "./features/accounts/AccountOperations.jsx";
import BalanceDisplay from "./features/accounts/BalanceDisplay.jsx";

export default function App() {
  const customer = useSelector((store) => store.customer.fullName);
  return (
    <main>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer ? (
        <>
          <Customer />

          <AccountOperations />
          <BalanceDisplay />
        </>
      ) : (
        <>
          <CreateCustomer />
        </>
      )}
    </main>
  );
}
