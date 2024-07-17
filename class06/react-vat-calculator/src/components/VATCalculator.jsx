import { useState } from "react";

function VATCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [grossPrice, setGrossPrice] = useState(null);
  const [vat, setVat] = useState(null);

  function calculate() {
    if (price && discount) {
      const priceValue = parseFloat(price);
      const discountValue = parseFloat(discount);
      const grossValue = priceValue - discountValue;
      const vatValue = grossValue * 0.07;

      setGrossPrice(grossValue);
      setVat(vatValue.toFixed(2));
    }
  }

  return (
    <div>
      <h1>VAT Calculator</h1>
      <label htmlFor="price">Price </label>
      <input
        type="text"
        name="price"
        id="price"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
        style={{ borderRadius: "5px", border: "white solid 1px" }}
      />
      <br />
      <label htmlFor="discount">Discount </label>
      <input
        type="text"
        name="discount"
        id="discount"
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Enter discount"
        style={{ borderRadius: "5px", border: "white solid 1px" }}
      />
      <br />
      {grossPrice !== null && (
        <div>
          <div>
            <strong>Gross Price = {grossPrice}</strong>
          </div>
          <div>
            <strong>VAT = {vat}</strong>
          </div>
        </div>
      )}
      <button
        onClick={calculate}
        style={{
          marginTop: "5px",
          borderRadius: "15px",
          border: "white solid 2px",
        }}
      >
        Calculate
      </button>
    </div>
  );
}

export default VATCalculator;
