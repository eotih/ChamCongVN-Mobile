import Axios from '../functions/BaseUrl';

async function getAbsentApplication(ID) {
  const res = await Axios.get(`Application/AbsentApplication/Employee/${ID}`);
  return res.data;
}

async function getOverTimeApplication(ID) {
  const res = await Axios.get(`Application/OverTimeApplication/Employee/${ID}`);
  return res.data;
}

export { getAbsentApplication, getOverTimeApplication };