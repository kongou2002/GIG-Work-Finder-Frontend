import React from 'react';
import './style.scss';
footer.propTypes = {

};

function footer(props) {
    return (
        <div className='container'>
            <div className='about-us'>
                <h3>About Us</h3>
                <ul>
                    <li>Trang chủ</li>
                    <li>về GIG-Worker</li>
                    <li>câu hỏi thường gặp</li>
                    <li>Liên hệ</li>
                </ul>
            </div>
            <div className='condition'>
                <h3>Điều khoảng chung</h3>
                <ul>
                    <li>Quy định bảo mật</li>
                    <li>Quy chế hoạt động</li>
                    <li>Giải quyết khiếu nại</li>
                    <li>Thỏa thuận sử dụng</li>
                </ul>
            </div>
            <div>
                <h3>Liên hệ tuyển dụng tại</h3>
                <ul>
                    <li>Hồ Chí Minh:(+84)555 666 777 </li>
                    <li>Email: gigworker@gmail.com</li>
                </ul>
            </div>
            <div className='coppyright'>
                <h6>coppyright © 2022</h6>
                <h6>GIG-Worker</h6>
            </div>
        </div>
    );
}

export default footer;