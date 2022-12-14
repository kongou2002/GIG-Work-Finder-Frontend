import { Button, CardMedia, Container, Rating, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import businessApi from '../../api/businessApi';
import Businessjob from './component/BusinessJob';
import recruiterApi from '../../api/recruiterApi';
import TabPanel from './component/TabPanel';
import "./style.scss";

function Business(props) {
  const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(2);
  const [value, setValue] = useState(0);
  const [prop, setProp] = useState();
  const [rate, setRate] = useState()
  const param = (props)
  const id = useParams()
  console.log(param)
  const nav = useNavigate();
  const handleTabs = (e, val) => {
    setValue(val)
  }

  useEffect(() => {
    setLoading(true)
    const fetchBusiness = async () => {
      console.log('param', param)
      const jobList = await businessApi.getID(param?.businessID != undefined ? param?.businessID : id?.id);
      setRepo(jobList);
      setRate(await recruiterApi.getID(jobList?.accountID));

      setLoading(false)
    }
    fetchBusiness();

  }, []);
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
                image={repo?.businessLogo}
                alt="Live from space album cover"
              />
            </Box>
            <Box className='business-name'>
              <h1>{repo?.businessName}</h1>
              <p>Địa chỉ: {repo?.address}, {repo?.location?.city}, {repo?.location?.province}</p>
              <Rating name="read-only" value={rate?.averageStars} readOnly precision={0.5} />

            </Box>


            {user?.id != repo?.accountID ?
              <Box className='business-button'>
                <Button className='business-button-01' variant="contained" onClick={() => { nav(`/profile/Recruiter/${repo.accountID}`) }} sx={{ bgcolor: 'green', color: 'white' }}>Liên hệ chủ cửa hàng</Button>
                <Button className='business-button-02' variant="contained" sx={{ bgcolor: 'green', color: 'white' }}>Viết đánh giá</Button>
              </Box> :
              <h4>Chào mừng quản lý: {user?.name}</h4>}


          </Stack>

          <Stack>
            <Tabs value={value} onChange={handleTabs}>
              <Tab label='Thông tin' />
              <Tab label='Tuyển dụng' />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Box className='intro-box'>
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Giới thiệu công ty {repo?.businessName}
                </Typography>
                <Typography component='p'>
                  {repo?.description}
                </Typography>
                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                  Quyền lợi khi tham gia cùng chúng tôi:
                </Typography>
                <Typography component='p'>
                  {repo?.benefit}
                </Typography>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1} className='box-job'><Businessjob id={repo?.businessID} className='box-job-info' /></TabPanel>
          </Stack>
        </Container >
      )
      }
    </div >
  )
}

export default Business