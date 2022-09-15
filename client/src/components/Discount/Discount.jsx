import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Discount.css";
const Discount = () => {
  const [discountAmount, setDiscountAmount] = useState(0);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (discountAmount >= 150 && discountAmount < 1000) {
      setWarning(true);
      setError(false);
    } else if (discountAmount >= 1000) {
      setWarning(false);
      setError(true);
    } else {
      setWarning(false);
      setError(false);
    }
  }, [discountAmount]);
  return (
    <div className="discount-counter">
      <div className="discount-header">
        <h2>Add Discount for Garrick's query </h2>
      </div>
      <div className="discount-description">
        <p>
          Choose the discount you want to apply for this query. You will see the
          final cost reflected on
          <br />
          the Summary being showed taking into account the discount you enter.
        </p>
      </div>
      <div className="discount-enter-summary">
        <div className="dicount-enter">
          <div className="discount-enter-heading">
            <span>Enter Discount</span>
            <p>Select from one of the available Discounting modes</p>
          </div>
          <div className="discount-enter-fields">
            <div className="disocunt-mode">
              <label>Discount Mode</label>
              <select>
                <option>Rupees From Base Price</option>
              </select>
            </div>
            <div className="discount-amount">
              <label>Discount Amount</label>
              <input
                type="text"
                onChange={(e) => setDiscountAmount(Number(e.target.value))}
                placeholder="Enter the Discount Amount"
              />
              {warning && (
                <label className="showWarning">Discount Seems a Bit high</label>
              )}
              {error && (
                <label className="showError">
                  You can not apply this much Discount
                </label>
              )}
            </div>
            <div className="discount-applicable">
              <label>Net Applicable Discount</label>
              <input type="text" placeholder="Net Applicable Discount" />
            </div>
            <div className="discount-submit-button">
              <button type="button">Apply Discount</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Discount;
