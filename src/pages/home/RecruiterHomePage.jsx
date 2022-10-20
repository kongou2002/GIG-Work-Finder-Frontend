import React from 'react'
import { Button, Image } from 'react-bootstrap'

function RecruiterHomePage() {
    const handlePostJob = () => {
        //handle post job here
    }
  return (
    <div>
        <div className='UpComponent'>
            <div>
                <h1>Tuyển dụng dễ dàng, tiện dụng và nhanh chóng. Tiếp cận các nhân sự ưu tú và hết mình với công việc</h1>
                <button onClick={handlePostJob}>Đăng việc làm</button>
            </div>
            <Image 
            src='https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'
            alt=''>
            </Image>
        </div>
        <div className='UownComponent'>
            <div>
                <h1>Thêm công ty của bạn vào danh sách quản lý</h1>
                <p>Quản lý các công ty, cửa hàng của bạn một cách dễ dàng và trực quang. Mọi thông tin về công ty sẽ được tiếp cận rộng rãi với mọi người.</p>
            </div>
            <div>
            <h1>Danh sách các đơn ứng tuyển cần duyệt</h1>
                <p>
                Các đơn ứng tuyển của thành viên GIG-Woker đang đợi bạn duyệt để ứng tuyển theo yêu cầu của bạn.
                </p>
            </div>
            <div>
            <h1>Xem các hoạt động gần đây của bạn</h1>
                <p>
                Mọi hoạt động trong việc quản lý công ty, nhân sự và các bài đăng của bạn gần đây.
                </p>
            </div>
      </div>
    </div>
  )
}

export default RecruiterHomePage