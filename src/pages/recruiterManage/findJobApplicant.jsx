import { Container, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TabPanel from '../../component/business/component/TabPanel';
import JobApplicant from '../../component/jobOffer/component/JobApplicant';
//import Userbusiness from '../../component/business/component/Userbusiness';
//import "./style.scss";

function BusinessManagement() {
    const param = useParams()
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
                                Danh sách các ứng viên được đề xuất:
                            </Typography>
                            <JobApplicant id={param.oid} userID={user.id} />
                        </Box>
                    </Stack>
                </Container >
            )
            }
        </div >
    )
}

export default BusinessManagement