import AXIOS from 'axios';

const axios = AXIOS.create({
  baseURL: `http://192.168.1.9:45455/`
});
export default axios;