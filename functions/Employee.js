import Axios from '../functions/BaseUrl';

async function getEmployees(ID) {
  const res = await Axios.get(`Employee/Employee/${ID}`);
  return res.data;
}


export { getEmployees };