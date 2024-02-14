import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [contextData, setContextData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  // const [contextData, setContextData] = useState(null);

  return (
    <UserContext.Provider value={{ contextData, setContextData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;