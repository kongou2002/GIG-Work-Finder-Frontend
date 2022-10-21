import React from 'react'
import { Button, Image } from 'react-bootstrap'
import './recruiterStyle.scss'

function RecruiterHomePage() {
    const handlePostJob = () => {
        //handle post job here
    }
    return (
        <div>
            <div className='banner-row'>
                <div className='write-job'>
                    <h1>Tuyển dụng dễ dàng, tiện dụng và nhanh chóng. Tiếp cận các nhân sự ưu tú và hết mình với công việc</h1>
                    <Button onClick={handlePostJob}>Đăng việc làm</Button>
                </div>
                <div className='banner-img'>
                    <img
                        src='https://cdn.5280.com/2020/05/Jason_Hatfield_CNM_Independence_Monument-960x718.jpg'
                        alt=''>
                    </img>
                </div>
            </div>
            <div className='button-row'>
                <Button className='button-1st'>
                    <h1>Thêm công ty của bạn vào danh sách quản lý</h1>
                    <p>Quản lý các công ty, cửa hàng của bạn một cách dễ dàng và trực quang. Mọi thông tin về công ty sẽ được tiếp cận rộng rãi với mọi người.</p>
                </Button>
                <Button className='button-2nd'>
                    <h1>Danh sách các đơn ứng tuyển cần duyệt</h1>
                    <p>
                        Các đơn ứng tuyển của thành viên GIG-Woker đang đợi bạn duyệt để ứng tuyển theo yêu cầu của bạn.
                    </p>
                </Button>
                <Button className='button-3rd'>
                    <h1>Xem các hoạt động gần đây của bạn</h1>
                    <p>
                        Mọi hoạt động trong việc quản lý công ty, nhân sự và các bài đăng của bạn gần đây.
                    </p>
                </Button>
            </div>
        </div>
    )
}

export default RecruiterHomePage