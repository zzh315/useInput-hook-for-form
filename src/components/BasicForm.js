import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFName,
    isValidEnteredValue: isValidEnteredFName,
    hasError: fNameHasError,
    valueFormClassName: fNameFormClassName,
    inputBlurHandler: fNameInputBlurHandler,
    valueChangeHandler: fNameChangeHandler,
    reset: resetFName,
  } = useInput((name) => name.trim() !== "");

  const {
    value: enteredLName,
    isValidEnteredValue: isValidEnteredLName,
    hasError: lNameHasError,
    valueFormClassName: lNameFormClassName,
    inputBlurHandler: lNameInputBlurHandler,
    valueChangeHandler: lNameChangeHandler,
    reset: resetLName,
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

  let formIsValid =
    isValidEnteredFName && isValidEnteredLName && isValidEnteredEmail;

  const forSubmitHandler = (event) => {
    event.preventDefault();
    resetFName();
    resetLName();
    resetEmail();
  };

  return (
    <form onSubmit={forSubmitHandler}>
      <div className="control-group">
        <div className={fNameFormClassName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fNameChangeHandler}
            value={enteredFName}
            onBlur={fNameInputBlurHandler}
          />
          {fNameHasError && <p>please enter valid first name</p>}
        </div>
        <div className={lNameFormClassName}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNameChangeHandler}
            value={enteredLName}
            onBlur={lNameInputBlurHandler}
          />
          {lNameHasError && <p>please enter valid Last name</p>}
        </div>
      </div>
      <div className={emailFormClassName}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailHasError && <p>please enter valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
