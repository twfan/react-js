import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="fullname"
        type="text"
        placeholder="John Doe"
        name="fullname"
      ></InputForm>
      <InputForm
        label="email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      ></InputForm>
      <InputForm
        label="password"
        type="password"
        placeholder="********"
        name="password"
      ></InputForm>
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirmPassword"
      ></InputForm>
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
