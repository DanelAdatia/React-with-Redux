export const MoneyDeposit = (total) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: total,
    });
  };
};

export const MoneyWithdraw = (total) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: total,
    });
  };
};
