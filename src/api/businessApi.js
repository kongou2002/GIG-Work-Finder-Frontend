import axiosClient from "./axiosClient";

const businessApi ={
    getID(id){
        const url = `/Business/ID/${id}`
        return axiosClient.get(url);
    }
};
export default businessApi