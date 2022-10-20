import axiosClient from "./axiosClient";

const applicantApi ={
    getID(id){
        const url = `/Applicant/AID/${id}`
        return axiosClient.get(url);
    }
};
export default applicantApi