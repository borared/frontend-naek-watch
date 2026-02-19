import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userPoints, setUserPoints] = useState(350);

  const deductPoints = (amount) => {
    setUserPoints((prev) => prev - amount);
  };

  return (
    <UserContext.Provider
      value={{ userPoints, setUserPoints, deductPoints }}
    >
      {children}
    </UserContext.Provider>
  );
}
