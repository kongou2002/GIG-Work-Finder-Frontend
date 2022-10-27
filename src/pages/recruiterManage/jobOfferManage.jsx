import { Container, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import TabPanel from '../../component/business/component/TabPanel';
import Userjoboffer from '../../component/jobOffer/component/Userjoboffer';

function JobOfferManagement() {
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
                            <Tab label='Tất cả bài đăng tuyển của bạn' />
                            <Tab label='Bài viết đang đăng tuyển' />
                            <Tab label='Bài đăng tuyển đã xóa hoặc hết hạn' />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách tất cả các bài viết:
                                </Typography>
                                <Userjoboffer id={user?.id} index={0} />
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các bài viết đang đăng tuyển :
                                </Typography>
                                <Userjoboffer id={user?.id} index={1} />
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các bài đăng tuyển đã xóa hoặc hết hạn:
                                </Typography>
                                <Userjoboffer id={user?.id} index={2} />
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