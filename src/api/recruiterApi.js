import axiosClient from "./axiosClient";
const recruiterApi = {
    getID(id) {
        const url = `/Recruiter/AID/${id}`;
        return axiosClient.get(url);
    }

}
export default recruiterApi;