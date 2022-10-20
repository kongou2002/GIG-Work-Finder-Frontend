import axiosClient from "./axiosClient";

const locationApi = {
    getAll() {
        const url = `/Location/Province/ALL`
        return axiosClient.get(url);
    },
    getProvince(province) {
        const url = `/Location/City/${province}`
        return axiosClient.get(url);
    }
};
export default locationApi