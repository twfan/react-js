import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        console.log(res.response.data);
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="twfan"
        name="username"
        ref={usernameRef}
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
      {loginFailed && (
        <p className="text-red-500 text-center my-5 text-xs">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
