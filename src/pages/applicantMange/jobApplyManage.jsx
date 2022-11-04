import { Container, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import TabPanel from '../../component/business/component/TabPanel';
import Userjobapply from './Userjobapply';

function JobApplyManagement() {
    const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
    const [repo, setRepo] = useState({});
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(0);

    const handleTabs = (e, val) => {
        setValue(val)
    }
    return (
        <div className='around'>
            {loading ? (
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            ) : (
                <Container className='box-bg'>
                    <Stack>
                        <Tabs value={value} onChange={handleTabs}>
                            <Tab label='Công việc đang chờ ứng tuyển' />
                            <Tab label='Công việc được đề xuất' />
                            <Tab label='Công việc đang làm' />
                            <Tab label='Công việc đã hoàn thành' />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các công việc đang chờ duyệt ứng tuyển:
                                </Typography>
                                <Userjobapply id={user?.id} index={0} />
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các công việc được đề xuất:
                                </Typography>
                                {/* <h1><Link to="/createjob" style={{ textDecoration: 'none', color: '#00b000' }} >+ Thêm bài viết</Link></h1> */}
                                <Userjobapply id={user?.id} index={1} />
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các công việc đang làm:
                                </Typography>
                                <Userjobapply id={user?.id} index={2} />
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các công việc đã hoàn thành:
                                </Typography>
                                <Userjobapply id={user?.id} index={3} />
                            </Box>
                        </TabPanel>
                    </Stack>
                </Container >
            )
            }
        </div >
    )
}

export default JobApplyManagement