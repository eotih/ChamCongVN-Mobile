import Axios from '../constants/BaseUrl';

async function getInfoEmployee(ID) {
  const res = await Axios.get('Employee/GetEmployeeByID?ID='+ID);
  return res.data;
}

export { getInfoEmployee, getAllShift, getAllPosition, getAllAccount };