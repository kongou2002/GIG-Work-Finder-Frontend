import axiosClient from "./axiosClient";

const jobOfferApi = {
    getAll(params) {
        const url = '/JobOffer/ALL'
        return axiosClient.get(url, { params });
    },
    getPopular(params) {
        const url = '/JobOffer/GetPopular'
        return axiosClient.get(url, { params });
    },
    getID(id) {
        const url = `/JobOffer/ID/${id}`;
        return axiosClient.get(url);
    },
    getPopular(params) {
        const url = '/JobOffer/GetPopular'
        return axiosClient.get(url, { params });
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
export default jobOfferApi;