import { forwardRef } from "react";
import Input from "./input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
      ></Input>
    </div>
  );
});

InputForm.displayName = InputForm;

export default InputForm;
