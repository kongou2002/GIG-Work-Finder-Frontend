import { Diversity1Sharp } from '@mui/icons-material'
import React from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './recruiterStyle.scss'
import img from '../../asset/image/recruiter-banner.jpg'

function RecruiterHomePage() {
    const nav = useNavigate()
    const handlePostJob = () => {
        //handle post job here
        nav('/createJob');

    }
    return (
        <div>
            <div className='banner-row'>
                <div className='write-job'>
                    <h1>Tuyển dụng dễ dàng, tiện dụng và nhanh chóng. Tiếp cận các nhân sự ưu tú và hết mình với công việc</h1>
                    <Button onClick={handlePostJob}>
                        <p style={{ color: "white", textDecoration: "none" }}>Đăng việc làm </p>
                    </Button>
                </div>
                <div className='banner-img'>
                    <img
                        src={img}
                        alt=''>
                    </img>
                </div>
            </div>
            <div className='button-row'>
                <div className='button-1st'>
                    <h1><Link to="/createbusiness" style={{ textDecoration: 'none', color: '#00b000' }} >Thêm công ty của bạn vào danh sách quản lý</Link></h1>
                    <p>Quản lý các công ty, cửa hàng của bạn một cách dễ dàng và trực quang. Mọi thông tin về công ty sẽ được tiếp cận rộng rãi với mọi người.</p>
                </div>
                <div className='button-2nd'>
                    <h1><Link to="/jobofferManage" style={{ textDecoration: 'none', color: '#00b000' }} >Danh sách các đơn ứng tuyển cần duyệt</Link></h1>
                    <p>
                        Các đơn ứng tuyển của thành viên GIG-Woker đang đợi bạn duyệt để ứng tuyển theo yêu cầu của bạn.
                    </p>
                </div>
                <div className='button-3rd'>
                    <h1><Link to="/findJobApplicant" style={{ textDecoration: 'none', color: '#00b000' }} >Tìm kiếm các nhân sự tiềm năng và nổi bật</Link></h1>
                    <p>
                        Danh sách các nhân sự tài năng, sẵn sàng làm việc mọi lúc, và đang chờ đợi ứng tuyển.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default RecruiterHomePage