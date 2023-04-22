import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValidEnteredValue: isValidEnteredName,
    hasError: nameHasError,
    valueFormClassName: nameFormClassName,
    inputBlurHandler: nameInputBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetName,
  } = useInput((name) => name.trim() !== "");

  const {
    value: enteredEmail,
    isValidEnteredValue: isValidEnteredEmail,
    hasError: emailHasError,
    valueFormClassName: emailFormClassName,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput((email) => email.includes("@"));

  let formIsValid = false;
  if (isValidEnteredName && isValidEnteredEmail) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameFormClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailFormClassName}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailHasError && <p className="error-text">Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
