import React, { useReducer } from "react";

export default function UserForm() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  const [inputVal, dispatch] = useReducer(
    (value, setValue) => ({ ...value, ...setValue }),
    initialState
  );

  const { firstName, lastName, email, password } = inputVal;

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };
  console.log(inputVal);
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <div className="cont">
      <form onSubmit={onFormSubmit}>
        <div>
          <label>
            <h4>First name</h4>
          </label>
          <input
            required
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
            ref={inputRef}
          />
        </div>
        <div>
          <label>
            <h4>Last name</h4>
          </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </div>
        <div>
          <label>
            <h4>Email</h4>
          </label>
          <input type="text" name="email" value={email} onChange={onChange} />
        </div>
        <div>
          <label>
            <h4>Password</h4>
          </label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
