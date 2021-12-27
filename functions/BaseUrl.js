import AXIOS from 'axios';

const axios = AXIOS.create({
  baseURL: `http://192.168.1.2:45455/`
});
export default axios;