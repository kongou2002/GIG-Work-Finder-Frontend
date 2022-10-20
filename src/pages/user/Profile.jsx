import { SettingsApplicationsTwoTone } from '@mui/icons-material';
import { Button, CardMedia, Container, Rating, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TabPanel from '../../component/business/component/TabPanel';
import applicantApi from '../../api/applicantApi';
import recruiterApi from '../../api/recruiterApi';
// import "./style.scss";

function Profile() {
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(2);
  const [value, setValue] = useState(0);
  const [user] = useState(JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount")));
  const handleTabs = (e, val) => {
    setValue(val)
  }

  useEffect(() => {
    setLoading(true)
    const fetchJobOffer = async () => {
      var userProfile;
      if ("Applicant" == user.role)
        userProfile = await applicantApi.getID(user.id);
      else
        if ("Recruiter" == user.role)
          userProfile = await recruiterApi.getID(user.id);
      setRepo(userProfile);
      setLoading(false)
    }
    fetchJobOffer();
  }, [user]);
  const handleYearsOld = () => {

  }
  const handleDashboard = (userRole) => {
    if ("Recruiter" == (userRole)) {
      return <Tab label='Quản lý' />
    }
    return '';
  }
  const handleUpdateButton = (userRole) => {
    if ("Recruiter" == (userRole) || "Applicant" == userRole) {
      return <Button variant="contained" sx={{ bgcolor: 'green', color: 'white' }}>Cập nhật thông tin</Button>
    }
    return <Button variant="contained" sx={{ bgcolor: 'green', color: 'white' }}>Liên hệ</Button>;
  }
  console.log(repo)
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
                image={user.picUrl}
                alt="Live from space album cover"
              />
            </Box>
            <Box className='business-name'>
              <h1>{repo.lastName} {repo.firstName}</h1>
              <p>Địa chỉ:
                {repo.address}, {repo?.location?.city}, {repo?.location?.province}
              </p>
              <Rating name="read-only" value={rating} readOnly />
            </Box>
            <Box className='business-button'>
              <Button variant="contained" sx={{ bgcolor: 'green', color: 'white' }}>Viết đánh giá</Button>
              {handleUpdateButton(user.role)}

            </Box>
          </Stack>

          <Stack>
            <Tabs value={value} onChange={handleTabs}>
              <Tab label='Thông tin' />
              {handleDashboard(user.role)}
              <Tab label='Đánh giá' />
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
                  Họ và tên: {repo?.lastName} {repo?.firstName}
                </Typography>
                <Typography component='li'>
                  Tuổi: {handleYearsOld}
                </Typography>
                <Typography component='li'>
                  Ngày sinh: {repo?.dob}
                </Typography>
                <Typography component='li'>
                  Giới tính: {repo?.gender}
                </Typography>
                <Typography component='li'>
                  Địa chỉ: {repo?.location?.city}, {repo?.location?.province}
                </Typography>
                <Typography component='li'>
                  Trạng thái:
                </Typography>
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Liên lạc:
                </Typography>
                <Typography component='li'>
                  Số điện thoại: {repo?.phone}
                </Typography>
                <Typography component='li'>
                  Email: {repo?.email}
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
            <TabPanel value={value} index={2} className='box-job'>
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