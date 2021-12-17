import Axios from '../functions/BaseUrl';

async function getInfoEmployee(ID) {
  const res = await Axios.get('Employee/Employee/'+ID);
  return res.data;
}

export { getInfoEmployee, getAllShift, getAllPosition, getAllAccount };