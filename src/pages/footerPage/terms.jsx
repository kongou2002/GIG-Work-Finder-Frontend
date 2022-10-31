/* eslint-disable no-unreachable */
import { Button, Rating, Skeleton } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Moment from 'moment';
import './footerStyle.scss'

function Term() {
    return (
        <Box className='ria-background'>
            <Box className='trong-background'>
                <h1 style={{ color: '#00b000' }}>Thỏa Thuận Sử Dụng</h1>

                <div className='term'>
                    <h2>Giới thiệu</h2>
                    <p>Việc bạn sử dụng trang web này biểu thị sự đồng ý của bạn đối với các điều khoản và điều kiện tạo thành một hợp đồng giữa bạn và chúng tôi quản lý việc sử dụng đó. Nếu bạn là người dùng, các quyền theo luật định của bạn sẽ không bị ảnh hưởng bởi thỏa thuận này.</p>
                </div>

                <div className='term'>
                    <h2>Quyền sở hữu trí tuệ</h2>
                    <p>Nội dung trang web của chúng tôi bao gồm tất cả thông tin, phần mềm, dữ liệu, văn bản, hình ảnh, âm thanh và video được bảo vệ bởi việc đăng ký bản quyền, thương hiệu, nhãn hiệu dịch vụ, bằng sáng chế hoặc các quyền sở hữu khác.</p>
                </div>

                <div className='term'>
                    <h2>Bảo vệ dữ liệu</h2>
                    <p>Thông tin cá nhân thu thập được từ bạn phải tuân theo Chính sách Bảo mật của chúng tôi.</p>
                </div>

                <div className='term'>
                    <h2>Trách nhiệm</h2>
                    <p>Phần này (và bất kỳ điều khoản nào khác không bao gồm hoặc giới hạn trách nhiệm pháp lý của chúng tôi) áp dụng cho các giám đốc, cán bộ, nhân viên, nhà thầu phụ, đại lý và các công ty trực thuộc cũng như cho chúng tôi. Không có điều khoản nào trong thỏa thuận này dưới bất kỳ hình thức nào giới hạn hoặc loại trừ trách nhiệm pháp lý của chúng tôi về sự cẩu thả gây ra tử vong hoặc thương tích cá nhân hoặc cho các hành vi sai trái gian lận hoặc cho bất cứ điều gì không hợp pháp được loại trừ hoặc hạn chế.</p>
                </div>

                <div className='term'>
                    <h2>Điều khoản chung</h2>
                    <p>Các điều khoản và điều kiện này tạo thành toàn bộ thỏa thuận giữa bạn và chúng tôi liên quan đến việc sử dụng trang web này. Bất kỳ sự sai sót nào do chúng tôi thực hiện hoặc thi hành, bất kỳ quyền hoặc quy định nào của các điều khoản và điều kiện này sẽ không tạo thành sự khước từ quyền hoặc quy định đó. Nếu bất kỳ phần nào của thỏa thuận này bị coi là không có hiệu lực vì bất kỳ lý do nào, phần còn lại sẽ tiếp tục có hiệu lực.</p>
                </div>

            </Box>
        </Box >
    )

}

export default Term