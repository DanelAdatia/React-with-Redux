import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();

  const { MoneyDeposit, MoneyWithdraw } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="App">
      <h1>{total}</h1>
      <button onClick={() => MoneyDeposit(2000)}>Deposit</button>
      <button onClick={() => MoneyWithdraw(2000)}>Withdraw</button>
    </div>
  );
}

export default App;
