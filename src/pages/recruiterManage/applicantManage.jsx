import { Button, CardMedia, Container, Rating, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import businessApi from '../../api/businessApi';
//import Businessjob from './component/BusinessJob';
import TabPanel from '../../component/business/component/TabPanel';
import ListApplyApplicant from './listApplyApplicant';
//import "./style.scss";

function ApplicantManagement() {
    // const id = useParams();
    const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
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
                            <Tab label='Đơn ứng tuyển đang chờ duyệt' />
                            <Tab label='Nhân sự đang hoạt động' />
                            <Tab label='Nhân sự đã xong việc' />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các đơn ứng tuyển:
                                </Typography>
                                <ListApplyApplicant id={user?.id} index={0} />
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các nhân sự đang làm việc:
                                </Typography>
                                <ListApplyApplicant id={user?.id} index={1} />
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các nhân sự đã hoàn thành công việc:
                                </Typography>
                                <ListApplyApplicant id={user?.id} index={2} />
                            </Box>
                        </TabPanel>
                    </Stack>
                </Container >
            )
            }
        </div >
    )
}

export default ApplicantManagement