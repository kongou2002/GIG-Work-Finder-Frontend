import { Button } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jobOfferApi from '../../../api/JobOffer';
import "./styleUserJO.scss";
function Userbusiness(props) {
    const user = (props)
    const [loading, setLoading] = useState(false)
    const [repo, setRepo] = useState()
    useEffect(() => {
        const fetchJobOffer = async () => {
            var jobList;
            if (user?.index == 1) {
                jobList = await jobOfferApi.getAllJOActive(user?.id);
            }
            if (user?.index == 0) {
                jobList = await jobOfferApi.getAllJO(user?.id);
            }
            if (user?.index == 2) {
                jobList = await jobOfferApi.getAllJOUnActive(user?.id);
            }
            setRepo(jobList);
        }
        fetchJobOffer();
    }, [loading]);
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
                                {(data?.business?.address != null && data?.business?.address != undefined) ?
                                    (<p>Địa chỉ: {data?.business?.address}, {data?.location?.city}, {data?.location?.province}</p>) :
                                    (<p>Địa chỉ: {data?.address}, {data?.location?.city}, {data?.location?.province}</p>)
                                }
                                <p style={{ color: 'blue' }}>Tình trạng tuyển: 0/{data?.numOfRecruit}</p>
                            </Box>
                            {user?.index == 0 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem chi tiết</Link></Button>
                                    {data.status == 0 &&
                                        <Button className='delete-button-02' variant='contained' >Bài viết đã xóa / hết hạn</Button>
                                    }
                                    {data.status == 1 &&
                                        <Button className='update-button-02' variant='contained' >Bài viết đang đăng tuyển</Button>
                                    }
                                </Box>}
                            {console.log("data: ", data)}
                            {user?.index == 1 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem chi tiết</Link></Button>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/findJobApplicant/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Đề xuất</Link></Button>
                                    {/* <Button className='update-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Cập nhật</Link></Button> */}
                                    <Button className='delete-button-02' variant='contained'
                                        onClick={
                                            async () => {
                                                await setLoading(true)
                                                // popup dialog confirm delete job offer
                                                if (window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
                                                    await jobOfferApi.remove(data?.offerID);
                                                    // check if delete success
                                                    if (data?.status == 0) {
                                                        alert("Xóa bài viết thành công");
                                                    }
                                                    await setLoading(false)
                                                }
                                            }
                                        }>
                                        Xóa bài viết
                                    </Button>
                                </Box>}
                            {user?.index == 2 &&
                                <Box className='button-bus-detail-02'>
                                    <Button className='detail-button-02' variant='contained' ><Link to={`/detail/${data?.offerID}`} style={{ textDecoration: 'none', color: 'white' }}>Xem chi tiết</Link></Button>
                                    <Button className='delete-button-02' variant='contained' ><Link to={`#`} style={{ textDecoration: 'none', color: 'white' }}>Bài viết đã xóa / hết hạn</Link></Button>
                                </Box>}
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    )
}

export default Userbusiness