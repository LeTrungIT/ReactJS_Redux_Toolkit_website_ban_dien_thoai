import axios from 'axios';

export const get = async (path) => {
    try {
        const res = await request(path);
        return res.data;
    } catch (err) {
        console.error(err);
    }
};
const request = axios.create({
    baseURL: 'https://639114cb0bf398c73a9a3130.mockapi.io/',
});
export default request;
