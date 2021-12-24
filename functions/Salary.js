import BaseUrl from '../functions/BaseUrl';
async function GetSalaryByEmloyeeID(ID) {
  const res = await BaseUrl.get('Salary/TotalSalaryPerMonth/' +ID);
  return res.data;
}

export {
  GetSalaryByEmloyeeID
};