import React from "react";
import loading from "../../asset/image/loading.svg";

const Loading = () => (
    <div className="spinner">
        <img src={loading} alt="Loading" />
    </div>
);

export default Loading;
