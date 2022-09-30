import axiosClient from "./axiosClient";

const companyApi = {
    getAll(params) {
        const url = '/JobOffer/ALL'
        return axiosClient.get(url, { params })
    },
    get(id) {
        const url = `/companies/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/companies'
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/companies/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/companies/${id}`;
        return axiosClient.delete(url);
    }
};
export default companyApi;