import { Button, CardMedia, Container, Rating, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import businessApi from '../../api/businessApi';
//import Businessjob from './component/BusinessJob';
import TabPanel from '../../component/business/component/TabPanel';
//import "./style.scss";

function JobOfferManagement() {
    // const id = useParams();
    const id = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
    const [repo, setRepo] = useState({});
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(2);
    const [value, setValue] = useState(0);

    const handleTabs = (e, val) => {
        setValue(val)
    }

    // useEffect(() => {
    //     setLoading(true)
    //     const fetchJobOffer = async () => {
    //         const jobList = await businessApi.getID(id?.id);
    //         setRepo(jobList);
    //         setLoading(false)
    //     }
    //     fetchJobOffer();
    // }, []);
    console.log(repo)
    return (
        <div className='around'>
            {loading ? (
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            ) : (
                <Container className='box-bg'>
                    <Stack>
                        <Tabs value={value} onChange={handleTabs}>
                            <Tab label='Tất cả bài đăng tuyển của bạn' />
                            <Tab label='Bài viết đang đăng tuyển' />
                            <Tab label='Bài đăng tuyển đã hết hạn' />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách tất cả các bài viết:
                                </Typography>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các bài viết đang đăng tuyển :
                                </Typography>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các bài đăng tuyển đã hết hạn:
                                </Typography>
                            </Box>
                        </TabPanel>
                    </Stack>
                </Container >
            )
            }
        </div >
    )
}

export default JobOfferManagement