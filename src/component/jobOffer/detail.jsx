/* eslint-disable no-unreachable */
import { Button, Rating, Skeleton } from '@mui/material';
import Popover from '@mui/material/Popover';
import { Box, Container, Stack } from '@mui/system';
import axios from 'axios';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import jobApplicantApi from '../../api/jobApplicantApi';
import jobOfferApi from '../../api/JobOffer';
import Business from '../business/Business';
import "./detailstyle.scss";
function Detail() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
  const id = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(2);
  const [jobApp, setJobApp] = useState();
  useEffect(() => {
    setLoading(true)
    axios.get(`https://gig-worker-backend.azurewebsites.net/JobOffer/ID/${id?.id}`).then((res) => {
      const { data } = res
      setRepo(data)
      const fetch = async () => { setJobApp(await jobApplicantApi.getAllJAppByApplicantID(user?.id)); }
      fetch();
      setLoading(false)
    })

  }, []);
  console.log(repo)
  console.log(loading)
  const handleButtonJobOfferApi = (oID, jAID) => {
    jobOfferApi.postApplyJO(oID, jAID)

    // nav('/jobApplyManage');
  }

  return (
    <Container className='around'>
      {loading ? (
        <Skeleton variant="rounded" width={'100%'} height={400} />
      ) : (

        <Stack className='background-detail'>
          <Stack className='head-detail'> {/*=================div detail phần head==================*/}
            <Box className='detail-info'>
              <h1>THÔNG TIN CHI TIẾT</h1>
            </Box>
            <Box className='detail-info-under'>
              <div className='logo-img'>
                <img src={repo?.business?.businessLogo} alt='' style={{ width: "120px" }} />
              </div>
              <div className='business-name'>
                <h1>{repo?.business?.businessName}</h1>
                <p>Địa chỉ: {repo.address}, {repo?.location?.city}, {repo?.location?.province}</p>
                <Box>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </div>
              <Box className='detail-business-button'>
                {repo?.business?.businessID != undefined ?
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <Button variant="contained" {...bindTrigger(popupState)}>
                          Xem thông tin công ty
                        </Button>
                        <Popover
                          {...bindPopover(popupState)}
                          anchorReference="anchorPosition"
                          anchorPosition={{ top: 300, left: 150 }}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <Business businessID={repo?.business?.businessID} />
                        </Popover>
                      </div>
                    )}
                  </PopupState> : <Button disabled ></Button>}
              </Box>
            </Box>
          </Stack>

          <Stack className='body-detail'> {/*=================div detail phần body==================*/}
            <Box className='box-left'>
              <Box className='left'>
                <p><p className='bold-p'>Công việc:</p><p className='value-p'>{repo?.jobType?.name}</p></p>
                <p><p className='bold-p'>Ngày làm:</p><p className='value-p'>Liên hệ</p></p>
                <p><p className='bold-p'>Thời gian:</p><p className='value-p'>{repo?.startTime?.slice(0, 5)} - {repo?.endTime?.slice(0, 5)}</p></p>
                <p><p className='bold-p'>Mức lương:</p><p className='value-p'>{repo?.salary} VND/giờ</p></p>
              </Box>
              <Box className='left'>
                <p><p className='bold-p'>Số lượng tuyển:</p><p className='value-p'>{repo?.numOfRecruit} người</p></p>
                <p><p className='bold-p'>Thời hạn tuyển:</p><p className='value-p'>Từ {repo?.createdDate?.slice(0, 10)} đến {repo?.offerEndTime?.slice(0, 10)}</p></p>
                <p><p className='bold-p'>Bằng cấp tối thiểu:</p><p className='value-p'>{repo?.degree?.degreeName}</p></p>
              </Box>
            </Box>
            {/* {user.role == 'Applicant' ?  */}
            <Box className='apply-button'>
              {console.log('oid', id?.id, 'userID', jobApp)}
              <Button onClick={
                () => {
                  jobOfferApi.postApplyJO(id?.id, jobApp[0])
                  nav('/jobApplyManage');
                }
              }>
                Ứng tuyển
              </Button>
            </Box>
            {/* : */}
            {/* <h1></h1>} */}

          </Stack>

          <Stack className='description-detail'> {/*=================div detail phần body==================*/}
            <Box className='description-detail-box'>
              <h1>Mô tả công việc:</h1>
              <p>{repo?.jobDescription}</p>
            </Box>
            <Box className='description-detail-box'>
              <h1>Những yêu cầu khác cho công việc:</h1>
              <p>{repo?.other}</p>
            </Box>
            <Box className='description-detail-box'>
              <h1>Quyền lợi:</h1>
              <p>{repo?.business?.benefit}</p>
            </Box>
          </Stack>

          <Stack className='comment-detail'> {/*=================div detail phần comment==================*/}
            {/* <p>comment div - chưa có làm qq j hết</p> */}
          </Stack>

        </Stack>
      )}
    </Container >
  )

}

export default Detail