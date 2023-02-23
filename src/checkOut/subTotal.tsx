import React from "react";
import CurrencyFormat from "react-currency-format";
const SubTotal = () => {
  return (
    <>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal (0 items):<strong>$0</strong>
            </p>
            <small className="subTotalGift">
              <input type="checkbox" />
              This oder contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeprator={true}
      />
    </>
  );
};
export default SubTotal;
