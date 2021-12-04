import BaseUrl from '../constants/BaseUrl';

async function GetAllTimeKeepingByEmployeeID(EmployeeID) {
    const res = await BaseUrl.get('GetAllTimeKeepingByEmployeeID?EmployeeID=' + EmployeeID);
    return res.data;
}
export {
    GetAllTimeKeepingByEmployeeID
};