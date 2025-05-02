import React from "react";

const RangeSliderWithText = ({ id, label, min, max, step, value, onChange, unit }) => {
  const [percent, setPercent] = React.useState(((value - min) / (max - min)) * 100);

  React.useEffect(() => {
    const input = document.getElementById(id);
    if (input) {
      const newPercent = ((value - min) / (max - min)) * 100;
      input.style.background = `linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${newPercent}%, white ${newPercent}%, white 100%)`;
      setPercent(newPercent);
    }
  }, [value, id, min, max]);

  return (
    <div className="range-container">
      <label htmlFor={id}>
        <span id={`${id}-label`} className="range-label">{label}:</span>{" "}
        <strong>{value.toLocaleString()} {unit}</strong>
      </label>
      <div className="slider-wrapper">
        <input
          id={id}
          aria-labelledby={`${id}-label`}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-orientation="horizontal"
          aria-live="polite"  
        />
        <p
          className="thumb-label"
          style={{
            position: "absolute",
            left: `${percent}%`,
            transform: "translateX(calc(-50% - 10vw)) translateY(-50%)"
          }}
          aria-live="polite"  
        >
          {value} {unit}
        </p>

        {percent < 90 && (
          <p
            className="max-label"
            aria-live="polite" 
          >
            {max} {unit}
          </p>
        )}
      </div>
    </div>
  );
};

export default RangeSliderWithText;
