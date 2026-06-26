import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import Context from "../Context";
import httpInertCeptor from "../lib/httpInterceptor";

const Guard = () => {
  const { session, setSession } = useContext(Context);

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    try {
      const { data } = await httpInertCeptor.get("/auth/session");
      console.log(data);
      setSession(data);
    } catch (err) {
      setSession(false);
    }
  };

  if (session === null) return null;

  if (session === false) return <Navigate to="/login" />;

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Guard;
