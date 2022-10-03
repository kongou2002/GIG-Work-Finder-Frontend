import axiosClient from "./axiosClient";

const companyApi = {
    getAll(params) {
        const url = '/JobOffer/ALL'
        return axiosClient.get(url, { params })
    },
    getID(id) {
        const url = `/JobOffer/ID/${id}`;
        return axiosClient.get(url);
    },
    getLID(id) {
        const url = `/jobOffer/LID/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/jobOffer'
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/jobOffer/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/jobOffer/${id}`;
        return axiosClient.delete(url);
    }
};
export default companyApi;