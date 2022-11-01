import axiosClient from "./axiosClient";

const jobMapApi = {
    confirm(mid) {
        const url = `/JobMap/Confirm/${mid}`;
        return axiosClient.put(url);
    },
    cancel(mid) {
        const url = `/JobMap/Cancel/${mid}`;
        return axiosClient.put(url);
    },
    finish(mid) {
        const url = `/JobMap/Finish/${mid}`;
        return axiosClient.put(url);
    },
};
export default jobMapApi;