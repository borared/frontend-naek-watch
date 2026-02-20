import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userPoints, setUserPoints] = useState(350);
  const [orders, setOrders] = useState([]);

  const deductPoints = (amount) => {
    setUserPoints((prev) => prev - amount);
  };

  return (
    <UserContext.Provider
      value={{ userPoints, setUserPoints, deductPoints, orders, setOrders }}
    >
      {children}
    </UserContext.Provider>
  );
}
