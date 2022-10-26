import { Button, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobOfferApi from '../../../api/JobOffer';
import "./styleUserJO.scss";
function Userbusiness(props) {
    const userid = (props)
    console.log(userid);
    const [loading, setLoading] = useState(false)
    const [repo, setRepo] = useState()
    useEffect(() => {
        setLoading(true)
        const fetchJobOffer = async () => {
            var jobList;
            if (userid?.index == 1) {
                jobList = await jobOfferApi.getAllJOActive(2);
            }
            if (userid?.index == 0) {
                jobList = await jobOfferApi.getAllJO(2);
            }
            if (userid?.index == 2) {
                jobList = await jobOfferApi.getAllJOUnActive(2);
            }

            setRepo(jobList);
            setLoading(false)
        }
        fetchJobOffer();
    }, []);
    console.log(repo)
    return (
        <Container>
            <Stack>
                <Box className='box-job-are'>
                    {repo?.map(data => (
                        <Box className='box-job-of-user-02'>
                            <Box className='img-logo-02'>
                                <img src={data?.business?.businessLogo} style={{ width: '100px', height: '100px' }} />
                            </Box>
                            <Box className='info-bus-02'>
                                <h1 style={{ color: '#00b000' }}>{data?.jobType?.name}</h1>
                                <p>Tên cửa hàng: {data?.business?.businessName}</p>
                                <p>Địa chỉ: {data?.address}, {data?.location?.city}, {data?.location?.province}</p>
                                <p style={{ color: 'blue' }}>Tình trạng tuyển: 0/{data?.numOfRecruit}</p>
                            </Box>
                            {userid?.index == 0 &&
                                <Box className='button-bus-detail-02'>
                                    <Button variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem chi tiết</Link></Button>
                                </Box>}
                            {userid?.index == 1 &&
                                <Box className='button-bus-detail-02'>
                                    <Button variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem chi tiết</Link></Button>
                                    <Button className='update-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Cập nhật</Link></Button>
                                    <Button className='delete-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Xóa bài viết</Link></Button>
                                </Box>}
                            {userid?.index == 2 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='delete-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Bài viết đã xóa</Link></Button>
                                </Box>}
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    )
}

export default Userbusiness