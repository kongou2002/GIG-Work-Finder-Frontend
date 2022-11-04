import axiosClient from "./axiosClient";

const jobApplicantApi = {
    getAll() {
        const url = '/JobApp/ALL'
        return axiosClient.get(url);
    },
    getRIDUnValid(rid) {
        const url = `/JobApp/RIDUnValid/${rid}`
        return axiosClient.get(url);
    },
    getRIDValid(rid) {
        const url = `/JobApp/RIDValid/${rid}`
        return axiosClient.get(url);
    },
    getRIDFinish(rid) {
        const url = `/JobApp/RIDFinish/${rid}`
        return axiosClient.get(url);
    },
    applyJA(jaid, aid) {
        const url = `/JobApp/ApplyJA?jaid=${jaid}&aid=${aid}`
        return axiosClient.post(url);
    },

    //-------------------
    getAppIDUnValid(aid) {
        const url = `/JobApp/AppIDUnValid/${aid}`
        return axiosClient.get(url);
    },
    getAppIDValid(aid) {
        const url = `/JobApp/AppIDValid/${aid}`
        return axiosClient.get(url);
    },
    getAppIDFinish(aid) {
        const url = `/JobApp/AppIDFinish/${aid}`
        return axiosClient.get(url);
    },
    getAppIDCancel(aid) {
        const url = `/JobApp/AppIDCancel/${aid}`
        return axiosClient.get(url);
    },
};
export default jobApplicantApi;