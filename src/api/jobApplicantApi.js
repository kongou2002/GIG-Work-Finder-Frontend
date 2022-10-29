import axiosClient from "./axiosClient";

const jobApplicantApi = {
    getAll() {
        const url = '/JobApp/ALL'
        return axiosClient.get(url);
    },
};
export default jobApplicantApi;