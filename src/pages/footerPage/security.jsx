/* eslint-disable no-unreachable */
import { Button, Rating, Skeleton } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Moment from 'moment';
import './footerStyle.scss'

function Security() {
    return (
        <Box className='ria-background'>
            <Box className='trong-background'>
                <h1 style={{ color: '#00b000' }}>Chính Sách Bảo Mật</h1>
                <div className='security'>
                    <h2>Thu thập thông tin của bạn:</h2>
                    <p>Mục đích chính của chúng tôi là tạo điều kiện thuận lợi cho quá trình tuyển dụng. Chúng tôi đáp ứng các yêu cầu của người sử dụng đối với các cơ hội việc làm IT và tạo điều kiện thuận lợi cho việc nộp đơn xin việc cho nhà tuyển dụng thông qua trang web của chúng tôi. Để thực hiện nghĩa vụ pháp lý và kinh doanh của chúng tôi, chúng tôi thu thập thông tin cá nhân mà bạn cung cấp cho chúng tôi khi truy cập trang web của chúng tôi. Chúng tôi cũng thu thập thông tin về cách bạn sử dụng trang web của chúng tôi. Chúng tôi sử dụng thông tin này để giúp bạn tìm được công việc phù hợp, cải tiến dịch vụ của chúng tôi và phân tích, khắc phục các khiếm khuyết. Để sử dụng các dịch vụ của chúng tôi, bạn sẽ được yêu cầu cung cấp cho chúng tôi các dữ liệu cá nhân của bạn như tên, địa chỉ email và hồ sơ ứng tuyển của bạn.
                        Trong quá trình tuyển dụng, chúng tôi cũng có thể lưu trữ thêm những thông tin có thể quan trọng khác.</p>
                </div>
                <div className='security'>
                    <h2>Cách chúng tôi sử dụng thông tin của bạn</h2>
                    <p>Để có thể cung cấp sản phẩm và dịch vụ của chúng tôi cho bạn, thông tin của bạn sẽ được lưu lại, xử lý và tiết lộ bởi chúng tôi theo các cách sau:
                        Để tạo thuận lợi cho quá trình tuyển dụng, chúng tôi kết hợp thông tin của bạn với các cơ hội việc làm.
                        Cho phép thông tin chi tiết về các kỹ năng và kinh nghiệm của bạn được xem bởi những công ty mà chúng tôi cảm thấy có thể quan tâm đến bạn.
                        Cập nhật cho bạn về hàng hoá và dịch vụ do đối tác kinh doanh bên thứ ba.
                        Bảo vệ mối quan hệ kinh doanh của chúng tôi với bạn như một người sử dụng trang web của chúng tôi.
                        Thực hiện các nghĩa vụ của chúng tôi phát sinh từ bất kỳ hợp đồng nào được ký kết giữa bạn và chúng tôi.
                        Chúng tôi cũng có thể chia sẻ thông tin của bạn với các công ty liên kết, các đại lý, các nhà cung cấp hoặc các bên cung cấp dịch vụ khác để thực hiện các chức năng thay mặt cho chúng tôi (như các nhà cung cấp dịch vụ lưu trữ đám mây, dịch vụ phân tích, dịch vụ tiếp thị và quảng cáo.
                    </p>
                </div>
                <div className='security'>
                    <h2>Chất lượng dữ liệu:</h2>
                    <p>Chúng tôi tin tưởng vào bạn để đảm bảo rằng thông tin của bạn là hoàn chỉnh, chính xác và đúng với hiện tại. Xin vui lòng thông báo cho chúng tôi kịp thời về bất kỳ sự thay đổi hoặc không chính xác nào trong thông tin của bạn.</p>
                </div>
                <div className='security'>
                    <h2>Lưu trữ dữ liệu:</h2>
                    <p>Chúng tôi lưu dữ liệu của bạn nhằm mục đích cung cấp các dịch vụ tuyển dụng trong tương lai cho bạn và để quản lý mối quan hệ kinh doanh. Trong trường hợp quan hệ kinh doanh chấm dứt, chúng tôi xác nhận rằng chúng tôi sẽ xóa dữ liệu cá nhân của bạn theo các nghĩa vụ pháp lý của chúng tôi.</p>
                </div>
                <div className='security'>
                    <h2>Các biện pháp an ninh:</h2>
                    <p>Chúng tôi có các biện pháp an toàn kỹ thuật và tổ chức phù hợp để đảm bảo sự an toàn cho thông tin của bạn và để bảo vệ nó trước hành động cố ý hoặc vô tình thao túng, hủy hoại, mất mát hoặc truy cập trái phép.</p>
                </div>
            </Box>
        </Box >
    )

}

export default Security