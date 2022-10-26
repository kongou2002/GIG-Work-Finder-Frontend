import { Container, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import TabPanel from '../../component/business/component/TabPanel';
import Userbusiness from '../../component/business/component/Userbusiness';
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
                            <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                Danh sách các công ty và cửa hàng đang quản lý:
                            </Typography>
                            <Userbusiness id={user?.id} />
                        </Box>
                    </Stack>
                </Container >
            )
            }
        </div >
    )
}

export default BusinessManagement