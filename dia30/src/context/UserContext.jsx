import React, { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    name: "Cindy"
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};