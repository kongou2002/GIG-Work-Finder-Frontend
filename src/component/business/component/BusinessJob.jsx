import { Skeleton } from '@mui/material';
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jobOfferApi from '../../../api/JobOffer';
// import "./style.scss";

function JobOffer(props) {
    const id = (props)
    const [repo, setRepo] = useState([]);
    const [loading, setLoading] = useState(false);
    /* A hook that is called when the component is mounted. */
    console.log(id)
    useEffect(() => {
        setLoading(true)
        const fetchJobOffer = async () => {
            const jobList = await jobOfferApi.getBusiness(id.id);
            setRepo(jobList);
            setLoading(false)
        }
        fetchJobOffer();
    }, []);
    console.log(repo)
    return (
        <div>
            {loading ? (
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            ) : (
                <div className='box-job'>
                    {repo.map((jobLists) => (
                        <div className='card' key={jobLists.offerID}>
                            <div className='description-box'>
                                <img src={jobLists.business.businessLogo} alt='' style={{ width: "100px" }} />
                                <div className='description'>
                                    <h1>{jobLists.jobType.name}</h1>
                                    <p className='salary'>Luơng: {jobLists.salary} VND/giờ</p>
                                    <p>Địa chỉ: {jobLists.address}, {jobLists.location.city}, {jobLists.location.province}</p>
                                </div>
                            </div>
                            <div className='bottomButton'>
                                <p style={{ color: "blue", textDecoration: "none" }}>Tình trạng tuyển: 0/{jobLists.numOfRecruit} người</p>
                                <div className='film-button'>
                                    <button >
                                        <Link to={`detail/${jobLists.offerID}`} style={{ color: "white", textDecoration: "none" }}>Xem chi tiết</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div >
    )
}

export default JobOffer