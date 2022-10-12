import { Button, CardMedia, Container, Rating, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import businessApi from '../../api/businessApi';
import Businessjob from './component/BusinessJob';
import TabPanel from './component/TabPanel';

function Business() {
  const id = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(2);
  const [value, setValue] = useState(0);

  const handleTabs =(e,val) =>{
    setValue(val)
  }

  useEffect(() => {
    setLoading(true)
    const fetchJobOffer = async () => {
      const jobList = await businessApi.getID(id.id);
      setRepo(jobList);
      setLoading(false)
    }
    fetchJobOffer();
  }, []);
  console.log(repo)
  return (
    <div>
      {loading ? (
        <Skeleton variant="rounded" width={1430} height={400} />
      ) : (
        <Container >
          <Stack sx={{ display: 'flex', flex: '1', flexDirection:'row' }}>
            <Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={repo.businessLogo}
                alt="Live from space album cover"
              />
            </Box>
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                {repo.businessName}
              </Typography>
              <Typography variant='p' component='div'>
                Địa chỉ: {repo.address}
              </Typography>
                <Rating name="read-only" value={rating} readOnly />
            </Box>
            <Box>
                <Button variant="contained" sx={{bgcolor:'green', color: 'white'}}>Viết đánh giá</Button>
                <Button variant="contained" sx={{ bgcolor: 'green', color: 'white' }}><Link to={`/recruiter/${repo.userid}`}>Liên hệ chủ cửa hàng</Link></Button>
            </Box>
          </Stack>
          <Stack>
            <Tabs value={value} onChange={handleTabs}>
                <Tab label='Thông tin' />
                <Tab label='Tuyển dụng' />
            </Tabs>
            <TabPanel value={value} index = {0}>
              <Box>
                <Typography component='h5' sx={{fontWeight: 'bold'}}>
                  Giới thiệu công ty {repo.businessName}
                </Typography>
                <Typography component='p'>
                    {repo?.description}
                </Typography>
                  <Typography component='h5' sx={{ fontWeight: 'bold' }}>
                    Quyền lợi khi tham gia cùng chúng tôi:
                  </Typography>
                  <Typography component='p'>
                    {repo?.benefit}
                  </Typography>
              </Box>
            </TabPanel>
            <TabPanel value={value} index = {1}><Businessjob id = {repo.businessID} /></TabPanel>
          </Stack>
        </Container >
      )}
    </div>
  )
}

export default Business