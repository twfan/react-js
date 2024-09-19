import { useEffect, useRef } from "react";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    console.log("Handle login");
    window.location.href = "/products";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
        ref={emailRef}
      ></InputForm>
      <InputForm
        label="password"
        type="password"
        placeholder="********"
        name="password"
      ></InputForm>
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
