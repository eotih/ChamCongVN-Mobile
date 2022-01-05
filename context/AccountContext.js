import React, { useEffect, useState, createContext } from "react";
import jwtDecode from "jwt-decode";
import { getAccountById } from "../functions/Organization";
import { getEmployees } from "../functions/Employee";
import Login from "../screens/Login";

const AccountContext = createContext();

function AccountProvider({ children, token }) {
  const [account, setAccount] = useState([]);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      const AccountID = decoded.nameid[0];
      const EmployeeID = decoded.nameid[2];
      getAccountById(AccountID).then((res) => {
        return res
      });
      getEmployees(EmployeeID).then((res) => {
        return res;
      });
      Promise.all([getAccountById(AccountID), getEmployees(EmployeeID)]).then(
        ([res1, res2]) => {
          setAccount(res1);
          setEmployees(res2);
        }
      );
    }
    else {
      return <Login />;
    }
  }, [token]);

  return (
    <AccountContext.Provider value={{ account, employees }}>
      {children}
    </AccountContext.Provider>
  );
}
export { AccountContext, AccountProvider };
