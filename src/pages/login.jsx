import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = (props) => {
  const { title } = props;
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
};

export default LoginPage;
