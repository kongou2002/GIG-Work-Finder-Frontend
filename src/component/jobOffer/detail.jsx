/* eslint-disable no-unreachable */
import { Button } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jobOfferApi from '../../api/JobOffer';
import StarRateIcon from '@mui/icons-material/StarRate';
import axios from 'axios';
function Detail() {

  const id = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    axios.get(`https://gig-worker-backend.azurewebsites.net/JobOffer/ID/${id.id}`).then((res) => {
      console.log(res)
      const { data } = res
      console.log(data)
      setRepo(data)
      setLoading(false)
    })

  }, []);
  console.log(repo)
  console.log(loading)
  return (
    !loading && (
      <Container>
        <Stack flexDirection={'row'}>
          <Box>
            <img src={repo.business?.businessLogo} alt='' />
          </Box>
          <Box>
            <h1>{repo.business?.businessName}</h1>
            <h6> địa chỉ: {repo.address}</h6>
            <Box>
              <StarRateIcon />
              <h5>start /5 (lượt đánh giá)</h5>
            </Box>
          </Box>
          <Box>
            <Button>Xem công ty</Button>
          </Box>
        </Stack>
        <Stack flexDirection={'row'}>
          <Box>
            <ul>
              <li>Công việc: {repo.jobType?.name}</li>
              <li>Ngày làm việc: contact</li>
              <li>Thời gian: {repo.startTime - repo.endTime}</li>
              <li>Mức lương: {repo.salary}vnđ/tiếng</li>
            </ul>
          </Box>
          <Box>
            <ul>
              <li>Số lượng tuyển: {repo.numOfRecruit} </li>
              <li>Thời hạn tuyển: {repo.createdDate} to {repo.offerEndTime}</li>
              <li>Hình thức: </li>
            </ul>
          </Box>
        </Stack>
        <Stack>
          <Box>
            <h1>Mô tả công việc</h1>
            <p>{repo.jobDescription}</p>
          </Box>
          <Box>
            <h1>Yêu cầu công việc</h1>
            <p></p>
          </Box>
          <Box>
            <h1>Quyền lợi:</h1>
            <p>Lương: {repo.salary}/giờ</p>

          </Box>
        </Stack>
        <Stack>
          {/* {repo.commentEntities?.map((comment)=>(
            <div>
            </div>
          ))} */}
        </Stack>
      </Container>
    )
  )
}

export default Detail