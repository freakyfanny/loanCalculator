import React from "react";
import { useEffect } from "react";
import RangeSliderWithText from "./RangeSliderWithText";

const LoanCalculator = () => {
  const [amount, setAmount] = React.useState(100000);
  const [years, setYears] = React.useState(5);
  const [monthlyCost, setMonthlyCost] = React.useState(0);

  const annualInterestRate = 0.099;
  const monthlyRate = annualInterestRate / 12;

  useEffect(() => {
    const months = years * 12;
    const factor = Math.pow(1 + monthlyRate, months);
    const monthly = amount * monthlyRate * factor / (factor - 1);
    setMonthlyCost(Math.round(monthly));
  }, [amount, years, monthlyRate]);

  const handleSubmit = () => {
    const url = `/loan-application/?amount=${amount}&months=${years * 12}`;
    // eslint-disable-next-line no-console
    console.log("Ansökningslänk:", url);
  };

  return (
    <section className="calculator-section" aria-labelledby="calculator-title">
      <h2 id="calculator-title" className="calculator-title">
        Lånekalkyl
      </h2>

      <RangeSliderWithText
        id="loanAmount"
        label="Lånebelopp"
        min={20000}
        max={200000}
        step={10000}
        value={amount}
        onChange={setAmount}
        unit="kr"
      />

      <RangeSliderWithText
        id="loanTerm"
        label="Återbetalningstid"
        min={2}
        max={10}
        step={1}
        value={years}
        onChange={setYears}
        unit="år"
      />

      <div className="output-container">
        <output htmlFor="loanAmount loanTerm" className="output" aria-live="polite">
          <h4>Exempel på månadskostnad</h4>
          <p>{monthlyCost.toLocaleString()} SEK / mån</p>
        </output>
      </div>

      <button
        onClick={handleSubmit}
        className="submit-button"
        aria-label={`Gå vidare till ansökan för ${amount.toLocaleString()} kr över ${years} år`}
      >
        Till ansökan
      </button>
    </section>
  );
};

export default LoanCalculator;
