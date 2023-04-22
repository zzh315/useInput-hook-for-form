import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValidEnteredValue = validateValue(enteredValue);
  const hasError = !isValidEnteredValue && isTouched;

  const inputBlurHandler = () => {
    if (!isValidEnteredValue) {
      setIsTouched(true);
    }
  };

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueFormClassName = hasError ? "form-control invalid" : "form-control";

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    reset,
    isValidEnteredValue,
    hasError,
    valueFormClassName,
    inputBlurHandler,
    valueChangeHandler,
  };
};

export default useInput;
