import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oopps!</h1>
      <p>Sorry, an unexpected error has accured</p>
    </div>
  );
};

export default ErrorPage;
