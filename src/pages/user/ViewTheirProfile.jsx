import { Button, CardMedia, Container, Rating, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import applicantApi from '../../api/applicantApi';
import recruiterApi from '../../api/recruiterApi';
import TabPanel from '../../component/business/component/TabPanel';
//import "./style.scss";

function Profile() {
  const nav = useNavigate();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(2);
  const [value, setValue] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount")));
  const [role] = useState(localStorage.getItem("role"));
  const handleNullText = <p style={{ display: 'inline', color: '#999999' }}>&#60;chưa cập nhật&#62;</p>;
  const handleTabs = (e, val) => {
    setValue(val)
  }

  useEffect(() => {
    setLoading(true)
    const fetchJobOffer = async () => {
      setUser(JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount")));
      var userProfile;
      if ("Applicant" == user?.role)
        userProfile = await applicantApi.getID(user?.id);
      else
        if ("Recruiter" == user?.role)
          userProfile = await recruiterApi.getID(user?.id);
      setRepo(userProfile);
      setLoading(false)
    }
    fetchJobOffer();
  }, [role]);
  console.log('User');
  console.log(user);
  console.log(role);
  const handleYearsOld = () => {

  }
  const handleDashboard = (userRole) => {
    if ("Recruiter" == (userRole)) {
      return <Tab label='Quản lý' />
    }
    return '';
  }
  const handlePrintUserData = (userData) => {
    return userData == undefined ? handleNullText : userData;
  }
  const handleUpdateButton = (userRole) => {
    if ("Recruiter" == (userRole) || "Applicant" == userRole) {
      return (

        <Button variant="contained" sx={{ bgcolor: 'green', color: 'white' }} onClick={() => { nav('/userProfile') }}>Cập nhật thông tin</Button>
      )
    }
    return (
      <Button variant="contained" sx={{ bgcolor: 'green', color: 'white' }} onClick={() => { nav('*link here') }}>Liên hệ</Button>
    )
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
                image={user?.picUrl}
                alt="Live from space album cover"
              />
            </Box>
            <Box className='business-name'>
              <h1>
                {repo?.firstName == undefined ? handleNullText : repo?.lastName + " " + repo?.firstName}
              </h1>
              <p>Địa chỉ:
                {repo?.location?.city == undefined ? handleNullText
                  : repo?.location?.province == undefined ? repo?.location?.city : repo?.location?.city + ", " + repo?.location?.province}
              </p>
              <Rating name="read-only" value={rating} readOnly />
            </Box>
            <Box className='business-button'>
              <Button variant="contained" sx={{ bgcolor: 'green', color: 'white' }}>Viết đánh giá</Button>
              {handleUpdateButton(user?.role)}

            </Box>
          </Stack>

          <Stack>
            <Tabs value={value} onChange={handleTabs}>
              <Tab label='Thông tin' />
              {handleDashboard(role)}
              <Tab label='Đánh giá' />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Box className='intro-box'>
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Giới thiệu bản thân
                </Typography>
                <Typography component='p'>
                  {handlePrintUserData(repo?.description)}
                  {/* {repo?.description} */}
                </Typography>
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Thông tin tài khoản:
                </Typography>
                <Typography component='li'>
                  Họ và tên: {repo?.firstName == undefined ? handleNullText : repo?.lastName + " " + repo?.firstName}
                </Typography>
                <Typography component='li'>
                  Tuổi: {handlePrintUserData(handleYearsOld(repo?.dob))}
                </Typography>
                <Typography component='li'>
                  Ngày sinh: {handlePrintUserData(repo?.dob)}
                </Typography>
                <Typography component='li'>
                  Giới tính: {handlePrintUserData(repo?.gender)}
                </Typography>
                {/* --- địa chỉ đã được show ở trên nên không cần ở phần này --- 
                <Typography component='li'>
                  Địa chỉ: {repo?.location?.city == undefined ? '<chưa cập nhật>'
                    : repo?.location?.province == undefined ? repo?.location?.city : repo?.location?.city + ", " + repo?.location?.province}
                  {/* {handlePrintUserData(repo?.location?.city)} {handlePrintUserData(repo?.location?.province)}
              </Typography> */}
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Liên lạc:
                </Typography>
                <Typography component='li'>
                  Số điện thoại: {handlePrintUserData(repo?.phone)}
                </Typography>
                <Typography component='li'>
                  Email: {handlePrintUserData(repo?.email)}
                </Typography>
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Trạng thái tài khoản:
                </Typography>
                <Typography component='li'>
                  {repo == undefined ? handleNullText : 'Đã xác thực với GIG-Woker'}
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