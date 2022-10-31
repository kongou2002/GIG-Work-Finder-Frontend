/* eslint-disable no-unreachable */
import { Button, Rating, Skeleton } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Moment from 'moment';
import './footerStyle.scss'

function Activity() {
    return (
        <Box className='ria-background'>
            <Box className='trong-background'>
                <h1 style={{ color: '#00b000' }}>Quy Chế Hoạt Động Của GIG-Worker</h1>
                <p>Sứ mệnh mà GIG-Worker hướng tới là sẽ trở thành Website tin cậy, là cầu nối giữa các Ứng viên và Nhà tuyển dụng.</p>

                <div className='activity'>
                    <h2>Nguyên tắc chung</h2>
                    <p>Thành viên trên Website là các Ứng viên và Nhà tuyển dụng có hoạt động hợp pháp được chính thức công nhận và được phép sử dụng Website và các bên liên quan cung cấp.
                        Nguyên tắc này áp dụng cho các thành viên đăng ký sử dụng, tham gia đăng tin tuyển dụng hoặc tìm việc làm được thực hiện trên Website.
                        Thông tin tuyển dụng hoặc tìm việc làm được đăng tải trên Website phải đáp ứng đầy đủ các quy định của pháp luật có liên quan, không thuộc các trường hợp cấm theo quy định của pháp luật.
                        Hoạt động đăng tin tuyển dụng qua Website phải được thực hiện công khai, minh bạch, đảm bảo quyền lợi của Ứng viên.
                        Tất cả các nội dung trong Quy chế này phải tuân thủ theo hệ thống pháp luật hiện hành của Việt Nam. Thành viên khi sử dụng Website GIG-Worker phải tự tìm hiểu trách nhiệm pháp lý của mình đối với luật pháp hiện hành của Việt Nam và cam kết thực hiện đúng những nội dung trong Quy chế của Website.</p>
                </div>

                <div className='activity'>
                    <h2>Quy định chung</h2>
                    <p>Nhà tuyển dụng: là thương nhân, tổ chức, cá nhân có nhu cầu sử dụng Website GIG-Worker để được: đăng tin tuyển dụng trực tuyến, đăng tin giới thiệu công ty.</p>
                    <p>Ứng viên: là thương nhân, tổ chức, cá nhân có nhu cầu tìm hiểu thông tin về việc làm được rao trên Website của Nhà tuyển dụng. Ứng viên cần đăng ký tài khoản để nộp hồ sơ trực tuyến</p>
                </div>

                <div className='activity'>
                    <h2>Cam kết bảo mật thông tin cá nhân khách hàng</h2>
                    <p>Thông tin Ứng viên/ Nhà tuyển dụng  trên GIG-Worker được GIG-Worker cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của GIG-Worker. Việc thu thập và sử dụng thông tin của Ứng viên/ Nhà tuyển dụng chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác.</p>
                </div>
            </Box>
        </Box >
    )

}

export default Activity