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
    getBusiness(id) {
        const url = `JobOffer/BusinessID/${id}`
        return axiosClient.get(url);
    },
    getJobType(id) {
        const url = `JobOffer/CreateJO/${id}`
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/JobOffer/CreateJO'
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/jobOffer/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/JobOffer/DeleteJO/${id}`;
        return axiosClient.delete(url);
    },

    getAllJO(id) {
        const url = `/JobOffer/GetAllJO/${id}`;
        return axiosClient.get(url);
    },
    getAllJOActive(id) {
        const url = `/JobOffer/GetAllJOActive/${id}`;
        return axiosClient.get(url);
    },
    getAllJOUnActive(id) {
        const url = `/JobOffer/GetAllJOUnActive/${id}`;
        return axiosClient.get(url);
    },
    getApplyJO(oid, jaid) {
        const url = `/JobOffer/ApplyJO/${oid}/${jaid}`;
        return axiosClient.get(url);
    },
    getAppIDUnvalid(aid) {
        const url = `/JobOffer/AppIDUnValid/${aid}`;
        return axiosClient.get(url);
    },
    getAppIDValid(aid) {
        const url = `/JobOffer/AppIDValid/${aid}`;
        return axiosClient.get(url);
    },
    getAppIDFinish(aid) {
        const url = `/JobOffer/AppIDFinish/${aid}`;
        return axiosClient.get(url);
    },

};
export default jobOfferApi;