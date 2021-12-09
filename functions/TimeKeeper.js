import BaseUrl from '../constants/BaseUrl';

async function GetAllTimeKeepingByEmployeeID(EmployeeID) {
    const res = await BaseUrl.get('GetAllTimeKeepingByEmployeeID?EmployeeID=' + EmployeeID);
    return res.data;
}
async function GetAccountByID(ID) {
    const res = await BaseUrl.get('Organization/GetAccountByID?ID=' + ID);
    return res.data;
}
export {
    GetAllTimeKeepingByEmployeeID,
    GetAccountByID,
};