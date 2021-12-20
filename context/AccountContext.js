import React, { useEffect, useState, createContext } from "react";
import jwtDecode from "jwt-decode";
import { getAccountById } from "../functions/Organization";
import Login from "../screens/Login";

const AccountContext = createContext();

function AccountProvider({ children, token }) {
  const [account, setAccount] = useState([]);
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      getAccountById(decoded.nameid[0]).then((res) => {
        setAccount(res);
      });
    }
    else {
      return <Login />;
    }
  }, [token]);

  return (
    <AccountContext.Provider value={account}>
      {children}
    </AccountContext.Provider>
  );
}
export { AccountContext, AccountProvider };
