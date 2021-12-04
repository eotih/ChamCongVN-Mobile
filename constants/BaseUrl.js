import AXIOS from 'axios';

const axios = AXIOS.create({
  baseURL: `http://192.168.1.7:45457/`
});

export default axios;