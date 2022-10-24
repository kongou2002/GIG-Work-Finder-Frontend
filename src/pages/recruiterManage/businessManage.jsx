import { Button, CardMedia, Container, Rating, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import businessApi from '../../api/businessApi';
import TabPanel from '../../component/business/component/TabPanel';
//import "./style.scss";

function BusinessManagement() {
    // const id = useParams();
    const id = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
    const [repo, setRepo] = useState({});
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(2);
    const [value, setValue] = useState(0);

    const handleTabs = (e, val) => {
        setValue(val)
    }

    useEffect(() => {
        setLoading(true)
        const fetchJobOffer = async () => {
            const jobList = await businessApi.getUID(id?.id);
            setRepo(jobList);
            setLoading(false)
        }
        fetchJobOffer();
    }, []);
    console.log(repo)
    return (
        <div className='around'>
            {loading ? (
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            ) : (
                <Container className='box-bg'>
                    <Stack>
                        <Tabs value={value} onChange={handleTabs}>
                            <Tab label='Cửa hàng đang quản lý' />
                            <Tab label='Cửa hàng đã ngưng hoạt động' />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các công ty và cửa hàng đang quản lý:
                                </Typography>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box className='intro-box'>
                                <Typography component='h5' sx={{ fontWeight: 'bold' }} className='bold-title'>
                                    Danh sách các công ty và cửa hàng đã ngưng hoạt động:
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

export default BusinessManagement