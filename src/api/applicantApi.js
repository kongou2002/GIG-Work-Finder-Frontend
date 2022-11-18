import axiosClient from "./axiosClient";

const applicantApi = {
    getID(id) {
        const url = `/Applicant/AID/${id}`
        return axiosClient.get(url);
    },
    updateProfile(data) {
        const url = '/Applicant/UpdateApp'
        return axiosClient.put(url, data);

    }
};
export default applicantApi