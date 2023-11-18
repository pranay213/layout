import React, { createContext, useEffect, useState } from "react";
import Toastify from "./Components/Toastity";
import { toast } from "react-toastify";

const UserContext = createContext({});
const UsercontextProvider = ({ children }) => {
  const [data, setData] = useState();
  useEffect(() => {
    if (data?.msg === "open") {
      toast.success("valves Opened", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        toast.success("Motor Running", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          // pauseOnHover: true,
          // draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }, 5000);
    }
    if (data?.msg === "close") {
      toast.error("Motor stopped", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        toast.error("valves closed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          // pauseOnHover: true,
          // draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }, 5000);
    }
  }, [data]);
  return (
    <UserContext.Provider value={{ data, setData }}>
      <Toastify />
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UsercontextProvider };
