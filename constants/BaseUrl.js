import AXIOS from 'axios';

const axios = AXIOS.create({
  baseURL: `https://api.chamcongvn.com/`
});

export default axios;