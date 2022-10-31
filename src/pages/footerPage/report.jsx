/* eslint-disable no-unreachable */
import { Button, Rating, Skeleton } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Moment from 'moment';
import './footerStyle.scss'

function Report() {
    return (
        <Box className='ria-background'>
            <Box className='trong-background'>
                <h1 style={{ color: '#00b000' }}>Chính Sách Giải Quyết Khiếu Nại</h1>

                <div className='report'>
                    <p>GIG-Worker tôn trọng và nghiêm túc thực hiện các quy định của pháp luật về bảo vệ quyền lợi của ứng viên.
                        Vì vậy, đề nghị các thành viên đăng tin tuyển dụng trên sàn cung cấp đầy đủ, chính xác, trung thực và chi tiết các thông tin liên quan đến nội dung công việc. Mọi hành vi lừa đảo, gian lận đều bị lên án và phải chịu hoàn toàn trách nhiệm trước pháp luật.</p>
                    <p>Các bên bao gồm ứng viên, người tuyển dụng sẽ phải có vai trò trách nhiệm trong việc tích cực giải quyết vấn đề. Đối với người tuyển dụng cần có trách nhiệm cung cấp văn bản giấy tờ chứng thực thông tin liên quan đến sự việc đang gây mâu thuẫu với ứng viên. </p>
                    <p>Trong trường hợp giao dịch phát sinh mâu thuẫn mà lỗi thuộc về người tuyển dụng: GIG-Worker sẽ có biện pháp cảnh cáo, khóa tài khoản hoặc chuyển cho cơ quan pháp luật có thẩm quyền tùy theo mức độ của sai phạm. GIG-Worker sẽ chấm dứt và gỡ bỏ toàn bộ tin bài về nội dung công việc của người tuyển dụng đó.</p>
                    <p>Nếu thông qua hình thức thỏa thuận mà vẫn không thể giải quyết được mâu thuẫn phát sinh từ giao dịch giữa 2 bên ứng viên, người tuyển dụng, thì một trong hai bên sẽ có quyền nhờ đến cơ quan pháp luật có thẩm quyền can thiệp nhằm đảm bảo lợi ích hợp pháp của các bên.</p>
                </div>

            </Box>
        </Box >
    )

}

export default Report