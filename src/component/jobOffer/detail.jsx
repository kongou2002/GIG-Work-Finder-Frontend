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
import recruiterApi from '../../api/recruiterApi';
import Business from '../business/Business';
import './detailstyle.scss';
function Detail() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
  const id = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(2);
  const [jobApp, setJobApp] = useState();
  const [rate, setRate] = useState();
  useEffect(() => {
    setLoading(true)
    // axios.get(`http://localhost:8080/JobOffer/ID/${id?.id}`).then((res) => {
    axios.get(`https://gig-worker-backend.azurewebsites.net/JobOffer/ID/${id?.id}`).then((res) => {
      const { data } = res

      setRepo(data)
      console.log('data', data)
      const fetch = async () => {
        const x = data?.recruiter?.accountID
        console.log('user id: ', x)
        setRate(await recruiterApi.getID(x));
        console.log('rate: ' + rate);
        if (user?.id != null && user?.id != undefined) {
          const a = await jobApplicantApi.getAllJAppByApplicantID(user?.id)
          setJobApp(a);
        }
        setLoading(false)

      }
      if (data?.recruiter !== undefined) fetch();

    })

  }, []);
  console.log(loading)
  const handleButtonJobOfferApi = (oID, jAID) => {
    jobOfferApi.postApplyJO(oID, jAID)

    // nav('/jobApplyManage');
  }
  console.log(jobApp)
  return (
    <Container className='around'>
      {loading == true ? (
        <Skeleton variant="rounded" width={'100%'} height={400} />
      ) : (

        <Stack className='background-detail'>
          <Stack className='head-detail'> {/*=================div detail ph???n head==================*/}
            <Box className='detail-info'>
              <h1>TH??NG TIN CHI TI???T</h1>
            </Box>
            <Box className='detail-info-under'>
              <div className='logo-img'>
                <img src={repo?.business?.businessLogo} alt='' style={{ width: "120px" }} />
              </div>
              <div className='business-name'>
                <h1>{repo?.business?.businessName}</h1>
                {(repo?.business?.address != null && repo?.business?.address != undefined) ?
                  (<p>?????a ch???: {repo?.business?.address}, {repo?.business?.location?.city}, {repo?.business?.location?.province}</p>) :
                  (<p>?????a ch???: {repo?.address}, {repo?.location?.city}, {repo?.location?.province}</p>)
                }
                <Box>
                  <Rating name="read-only" value={repo?.recruiter?.averageStars} readOnly precision={0.5} />
                </Box>
              </div>
              <Box className='detail-business-button'>
                {repo?.business?.businessID != undefined ?
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <Button variant="contained" className='popup-button' {...bindTrigger(popupState)}>
                          Xem th??ng tin c??ng ty
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

          <Stack className='body-detail'> {/*=================div detail ph???n body==================*/}
            <Box className='box-left'>
              <Box className='left'>
                <p><p className='bold-p'>C??ng vi???c:</p><p className='value-p'>{repo?.jobType?.name}</p></p>
                <p><p className='bold-p'>Ng??y l??m:</p><p className='value-p'>Li??n h???</p></p>
                <p><p className='bold-p'>Th???i gian:</p><p className='value-p'>{repo?.startTime?.slice(0, 5)} - {repo?.endTime?.slice(0, 5)}</p></p>
                <p><p className='bold-p'>M???c l????ng:</p><p className='value-p'>{repo?.salary} VND/gi???</p></p>
              </Box>
              <Box className='left'>
                <p><p className='bold-p'>S??? l?????ng tuy???n:</p><p className='value-p'>{repo?.numOfRecruit} ng?????i</p></p>
                <p><p className='bold-p'>Th???i h???n tuy???n:</p><p className='value-p'>T??? {repo?.createdDate?.slice(0, 10)} ?????n {repo?.offerEndTime?.slice(0, 10)}</p></p>
                <p><p className='bold-p'>B???ng c???p t???i thi???u:</p><p className='value-p'>{repo?.degree?.degreeName}</p></p>
              </Box>
            </Box>
            {user?.role == 'Applicant' ?
              <Box className='apply-button'>
                {console.log('oid', id?.id, 'userID', jobApp)}
                <Button onClick={
                  async () => {
                    await jobOfferApi.postApplyJO(id?.id, jobApp[0])
                    nav('/jobApplyManage');
                  }
                }>
                  ???ng tuy???n
                </Button>
              </Box>
              : user?.role == 'Recruiter' ?
                (<hr></hr>)
                :
                <Box className='apply-button'>
                  {console.log('oid', id?.id, 'userID', jobApp)}
                  <Button onClick={() => { nav('/login') }}>
                    ????ng nh???p ????? ???ng tuy???n
                  </Button>
                </Box>}

          </Stack>

          <Stack className='description-detail'> {/*=================div detail ph???n body==================*/}
            <Box className='description-detail-box'>
              <h1>M?? t??? c??ng vi???c:</h1>
              <p>{repo?.jobDescription}</p>
            </Box>
            <Box className='description-detail-box'>
              <h1>Nh???ng y??u c???u kh??c cho c??ng vi???c:</h1>
              <p>{repo?.other}</p>
            </Box>
            <Box className='description-detail-box'>
              <h1>Quy???n l???i:</h1>
              <p>{repo?.business?.benefit}</p>
            </Box>
          </Stack>

          <Stack className='comment-detail'> {/*=================div detail ph???n comment==================*/}
            {/* <p>comment div - ch??a c?? l??m qq j h???t</p> */}
          </Stack>

        </Stack>
      )
      }
    </Container >
  )

}

export default Detail