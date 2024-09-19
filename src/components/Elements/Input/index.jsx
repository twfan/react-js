import Input from "./input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;
