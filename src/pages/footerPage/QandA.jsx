/* eslint-disable no-unreachable */
import { Button, Rating, Skeleton } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Moment from 'moment';
import './footerStyle.scss'

function QandA() {
    return (
        <Box className='ria-background'>
            <Box className='trong-background'>
                <h1 style={{ color: '#00b000' }}>FAQ – Các Câu Hỏi Thường Gặp</h1>
                <div className='question'>
                    <p>1. Tôi có thể tham gia GIG-Worker như thế nào?</p>
                    <p>Bạn chỉ cần đăng nhập bằng tài khoản Google là đã có thể tham gia cùng chúng tôi.</p>
                </div>
                <div className='question'>
                    <p>2. Tôi có thể ứng tuyển bao nhiêu công việc?</p>
                    <p>Bạn có thể ứng tuyển nhiều công việc tùy ý, nhưng bạn phải đảm bảo công việc của bạn với những công ty bạn ứng tuyển</p>
                </div>
                <div className='question'>
                    <p>3. Các công ty có đảm bảo môi trường làm việc và trả lương đúng hạn?</p>
                    <p>Các công ty trên hệ thống chúng tôi là những công ty uy tín và đã được duyệt qua, bạn có thể yên tâm ứng tuyển.</p>
                </div>
                <div className='question'>
                    <p>4. Các doanh nghiệp sẽ quản lý công ty của mình như thế nào?</p>
                    <p>Các nhà ứng tuyển có thể dễ dàng thêm các cửa hàng và bài đăng tuyển của mình vào danh sách cá nhân để dễ dàng quản lý.</p>
                </div>
                <div className='question'>
                    <p>5. Làm sao để các doanh nghiệp có thể tìm kiếm nhân lực nhanh chóng?</p>
                    <p>Các doanh nghiệp có thể đề xuất các ứng viên trong các bài đăng tuyển của mình để tìm kiếm người làm việc nhanh chóng.</p>
                </div>
            </Box>
        </Box >
    )

}

export default QandA