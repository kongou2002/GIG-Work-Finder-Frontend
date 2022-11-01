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
    }
};
export default jobApplicantApi;