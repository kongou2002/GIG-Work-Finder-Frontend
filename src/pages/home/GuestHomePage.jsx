import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Member from '../../asset/image/memberbanner.jpg';
import Tick from '../../asset/image/tick.png';
import Login from '../../component/authentication/login';
import JobOffer from '../../component/jobOffer/joboffer';
import Search from '../../component/search/Search';
import "./style.scss";


function GuestHomePage() {
  const image = [/* them url hinh anh vao day */];
  const nav = useNavigate();
  return (
    <div className='container-home-page'>
      <div className='search-zone'>
        <Search />
      </div>
      <br></br>
      <div className='job-zone'>
        <div class='job-zone-list-box-title'>
          <h1>Khám phá các công việc đang "HOT", phổ biến trên thị trường:</h1>
          <div className='job-zone-list-box'>
            <JobOffer />
          </div>
        </div>
      </div>

      <div className='banner-member'>
        <div className='banner-member-bg'>
          <div className='left-col'>
            <div className='benefit-title'>
              <h1>Tham gia vào GIG-Worker bạn sẽ được:</h1>
            </div>
            <div className='benefit'>
              <img src={Tick} alt='' style={{ width: "40px", height: "40px" }} />
              <h2>Tìm việc làm linh động thời gian</h2>
            </div>
            <div className='benefit'>
              <img src={Tick} alt='' style={{ width: "40px", height: "40px" }} />
              <h2>Tiếp cận các cửa hàng uy tín</h2>
            </div>
            <div className='benefit'>
              <img src={Tick} alt='' style={{ width: "40px", height: "40px" }} />
              <h2>Công việc phù hợp với nhu cầu</h2>
            </div>
            <div className='benefit'>
              <img src={Tick} alt='' style={{ width: "40px", height: "40px" }} />
              <h2>Kiếm thêm thu nhập cá nhân</h2>
            </div>
            <div className='benefit benefit-final'>
              <img src={Tick} alt='' style={{ width: "40px", height: "40px" }} />
              <h2>Quản lí và bảo mật thông tin</h2>
            </div>
            <div className='redirect-login-button'>
              <Button onClick={() => { nav("/login") }}>Tham gia ngay</Button>
            </div>
          </div>
          <div className='right-col'>
            <img src={Member} alt='' style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>

      <div className='banner-recruiter'>
        <div className='banner-recruiter-bg'>
          <h2>Dành cho các doanh nghiệp, cửa hàng</h2>
          <div className='box-in-recruiter'>
            <h1>Tìm kiếm người làm việc trong thời gian ngắn</h1>
            <p>Tiếp cận hơn 10.000 người sẵn sàng làm việc mọi lúc, đáp ứng đầy đủ nhân lực cho cửa hàng</p>
          </div>
          <div className='recruiter-button-box'>
            <div className='recruiter-button'>
              <Button onClick={() => { nav("/contact") }}>Liên hệ để biết thêm chi tiết</Button>
            </div>
            <div className='recruiter-button'>
              <Button onClick={() => { nav("/login") }}>Tham gia vào cộng đồng</Button>
            </div>
            <div className='recruiter-button'>
              <Button onClick={() => { nav("/about") }}>Tìm hiểu thêm về GIG-Worker</Button>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}
export default GuestHomePage