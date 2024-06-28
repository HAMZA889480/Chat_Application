import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [chatList, setChatList] = useState(""); // Example state

  return (
    <AppContext.Provider value={{ chatList, setChatList }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

export const useChatList = () => {
  return useContext(AppContext);
};
