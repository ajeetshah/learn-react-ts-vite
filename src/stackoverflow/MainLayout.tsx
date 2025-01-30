import { Navigate, Outlet, useLocation } from "react-router";
import { Sidebar } from "./Sidebar";

export const MainLayout = () => {
  const location = useLocation();
  const { isError, isLoading } = { isError: false, isLoading: false };

  console.log("rendering MainLayout");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError && !isLoading) {
    return (
      <Navigate
        to={"/login"}
        replace
        state={{
          redirectTo: location,
        }}
      />
    );
  }

  return (
    <div className={"w-full h-screen flex flex-row bg-gray-100"}>
      <div>Sidebar:</div>
      <Sidebar />
      <div className={"w-full p-2"}>
        <div>Outlet:</div>
        <Outlet />
      </div>
    </div>
  );
};
