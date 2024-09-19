import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = (props) => {
  const { title } = props;
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister></FormRegister>
    </AuthLayout>
  );
};

export default RegisterPage;
