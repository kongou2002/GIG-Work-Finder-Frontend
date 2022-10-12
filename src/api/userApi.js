import axiosClient from "./axiosClient";
const user ={
    getRecruiterID(id) {
        const url = `/Recruiter/AID/${id}`;
        return axiosClient.get(url);
    },
}
export default user