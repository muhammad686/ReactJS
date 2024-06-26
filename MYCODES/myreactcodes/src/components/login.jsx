import React from "react";

function FormComponent(props) {
  return (
    <form action="" className="form">
      <input type="text" placeholder="Username" />
      {!props.isRegistered && <input type="password" placeholder="Password" />}
      <button type="submit">
        {" "}
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default FormComponent;
