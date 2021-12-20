import Axios from './BaseUrl';

async function getAccountById(id) {
    const res = await Axios.get(`Organization/Account/${id}`);
    return res.data;
}
export {
    getAccountById
};
