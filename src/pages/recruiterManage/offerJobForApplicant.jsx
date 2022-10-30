import { Container, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
//import TabPanel from '../../component/business/component/TabPanel';
import Userjoboffer from '../../component/jobOffer/component/Userjoboffer';
//import "./style.scss";

function BusinessManagement() {
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
                        <Box className='intro-box'>
                            <Typography component='h5' sx={{ fontWeight: 'bold', fontSize: '20px' }} className='bold-title'>
                                Danh sách các công việc có thể đề xuất:
                            </Typography>
                            <Userjoboffer id={user?.id} index={1} />
                        </Box>
                    </Stack>
                </Container >
            )
            }
        </div >
    )
}

export default BusinessManagement