import axiosClient from "./axiosClient";

const businessApi = {
    getID(id) {
        const url = `/Business/ID/${id}`
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/Business/CreateBu`
        return axiosClient.add(url);
    },
    getUID(id) {
        const url = `/Business/AID/${id}`
        return axiosClient.get(url);
    },
    getAll() {
        const url = `/Business/ALL`
        return axiosClient.get(url);
    },
};
export default businessApi