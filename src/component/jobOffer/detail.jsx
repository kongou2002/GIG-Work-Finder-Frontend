/* eslint-disable no-unreachable */
import { Button, Rating } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./detailstyle.scss";
import Moment from 'moment';
function Detail() {
  const id = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(2);
  useEffect(() => {
    setLoading(true)
    axios.get(`https://gig-worker-backend.azurewebsites.net/JobOffer/ID/${id.id}`).then((res) => {
      const { data } = res
      setRepo(data)
      setLoading(false)
    })

  }, []);
  console.log(repo)
  console.log(loading)
  return (
    !loading && (
      <Container className='around'>
        <Stack className='background-detail'>
          <Stack className='head-detail'> {/*=================div detail phần head==================*/}
            <Box className='detail-info'>
              <h1>THÔNG TIN CHI TIẾT</h1>
            </Box>
            <Box className='detail-info-under'>
              <div className='logo-img'>
                <img src={repo?.business?.businessLogo} alt='' style={{ width: "120px" }} />
              </div>
              <div className='business-name'>
                <h1>{repo?.business?.businessName}</h1>
                <p>Địa chỉ: {repo.address}, {repo?.location?.city}, {repo?.location?.province}</p>
                <Box>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </div>
              <Box className='detail-business-button'>
                <Button variant="outlined"><Link to={`/business/${repo?.business?.businessID}`} style={{ color: "white", textDecoration: "none" }}>Xem công ty</Link></Button>
              </Box>
            </Box>
          </Stack>

          <Stack className='body-detail'> {/*=================div detail phần body==================*/}
            <Box className='box-left'>
              <Box className='left'>
                <p><p className='bold-p'>Công việc:</p><p className='value-p'>{repo?.jobType?.name}</p></p>
                <p><p className='bold-p'>Ngày làm:</p><p className='value-p'>Liên hệ</p></p>
                <p><p className='bold-p'>Thời gian:</p><p className='value-p'>{repo?.startTime?.slice(0, 5)} - {repo?.endTime?.slice(0, 5)}</p></p>
                <p><p className='bold-p'>Mức lương:</p><p className='value-p'>{repo?.salary} VND/giờ</p></p>
              </Box>
              <Box className='left'>
                <p><p className='bold-p'>Số lượng tuyển:</p><p className='value-p'>{repo?.numOfRecruit} người</p></p>
                <p><p className='bold-p'>Thời hạn tuyển:</p><p className='value-p'>Từ {repo?.createdDate?.slice(0, 10)} đến {repo?.offerEndTime?.slice(0, 10)}</p></p>
                <p><p className='bold-p'>Bằng cấp tối thiểu:</p><p className='value-p'>{repo?.degree?.degreeName}</p></p>
              </Box>
            </Box>
            <Box className='apply-button'>
              <Button>Ứng tuyển</Button>
            </Box>
          </Stack>

          <Stack className='description-detail'> {/*=================div detail phần body==================*/}
            <Box className='description-detail-box'>
              <h1>Mô tả công việc:</h1>
              <p>{repo?.jobDescription}</p>
            </Box>
            <Box className='description-detail-box'>
              <h1>Những yêu cầu khác cho công việc:</h1>
              <p>{repo?.other}</p>
            </Box>
            <Box className='description-detail-box'>
              <h1>Quyền lợi:</h1>
              <p>{repo?.business?.benefit}</p>
            </Box>
          </Stack>

          <Stack className='comment-detail'> {/*=================div detail phần comment==================*/}
            <p>comment div - chưa có làm qq j hết</p>
          </Stack>

        </Stack>
      </Container >
    )
  )
}

export default Detail