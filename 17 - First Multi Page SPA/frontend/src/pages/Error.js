import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message; // by using Response()
    message = error.data.message; // by using json() by r-r-d. automatically converts the data.
  }
  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find any resource or page";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
