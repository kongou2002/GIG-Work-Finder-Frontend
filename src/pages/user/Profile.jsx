import { Button, CardMedia, Container, Rating, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TabPanel from '../../component/business/component/TabPanel';
// import "./style.scss";

function Profile() {
  const id = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(2);
  const [value, setValue] = useState(0);

  const handleTabs = (e, val) => {
    setValue(val)
  }

  useEffect(() => {
    // setLoading(true)
    // const fetchJobOffer = async () => {
    //   const jobList = await businessApi.getID(id.id);
    //   setRepo(jobList);
    //   setLoading(false)
    // }
    // fetchJobOffer();
  }, []);
  // console.log(repo)
  return (
    <div className='around'>
      {loading ? (
        <Skeleton variant="rounded" width={'100%'} height={'100%'} />
      ) : (
        <Container className='box-bg'>
          <Stack sx={{ display: 'flex', flex: '1', flexDirection: 'row' }} className='head-business'>
            <Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={repo.businessLogo}
                alt="Live from space album cover"
              />
            </Box>
            <Box className='business-name'>
              <h1>{repo.businessName}</h1>
              <p>Địa chỉ: 
                {/* {repo.address}, {repo?.location?.city}, {repo?.location?.province} */}
                </p>
              <Rating name="read-only" value={rating} readOnly />
            </Box>
            <Box className='business-button'>
              <Button variant="contained" sx={{ bgcolor: 'green', color: 'white' }}>Viết đánh giá</Button>
              <Button variant="contained" sx={{ bgcolor: 'green', color: 'white' }}>Liên hệ chủ cửa hàng</Button>
            </Box>
          </Stack>

          <Stack>
            <Tabs value={value} onChange={handleTabs}>
              <Tab label='Thông tin' />
              <Tab label='Tuyển dụng' />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Box className='intro-box'>
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Giới thiệu bản thân
                </Typography>
                <Typography component='p'>
                  {repo?.description}
                </Typography>
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Thông tin tài khoản:
                </Typography>
                <Typography component='li'>
                  Họ và tên: 
                  Tuổi:
                  Ngày sinh:
                  Giới tính:
                  Địa chỉ:
                  Trạng thái:
                </Typography>
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Liên lạc:
                </Typography>
                <Typography component='li'>
                  Số điện thoại:
                  Email:
                </Typography>
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Trạng thái tài khoản:
                </Typography>
                <Typography component='li'>
                  Đã xác thực với GIG-Woker
                </Typography>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1} className='box-job'>
              {/* <Businessjob id={repo.businessID} className='box-job-info' /> */}
              </TabPanel>
          </Stack>
        </Container >
      )
      }
    </div >
  )
}

export default Profile