import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const isUser = localStorage.getItem("isAuthenticated");

      if (!isUser || isUser === "false") {
        Router.replace("/login");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;