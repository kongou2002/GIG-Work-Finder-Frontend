import axiosClient from "./axiosClient";

const businessApi ={
    getID(id){
        const url = `/Business/ID/${id}`
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/Business/`
        return axiosClient.add(url);
    }
};
export default businessApi