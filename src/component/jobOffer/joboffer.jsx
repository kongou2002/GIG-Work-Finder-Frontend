import { color } from '@mui/system';
import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import jobOfferApi from '../../api/JobOffer';
import logo from '../../asset/image/1200px-Circle_K_logo.png'
import "./style.scss";

function JobOffer() {
    const [repo, setRepo] = useState([]);
    /* A hook that is called when the component is mounted. */
    useEffect(() => {
        const fetchJobOffer = async () => {
            const params = {
                limit: 6,
            };
            const jobList = await jobOfferApi.getAll(params);
            setRepo(jobList);
        }
        fetchJobOffer();
    }, []);
    console.log(repo)
    return (
        <div className='box-job'>
            {repo.map((jobLists) => (
                <div className='card' key={jobLists.offerID}>
                    <div className='description-box'>
                        <img src={logo} alt='' style={{ width: "100px" }} />
                        <div className='description'>
                            <h1>{jobLists.jobType.name}</h1>
                            <p>Luơng: {jobLists.salary} VND/giờ</p>
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
    )
}

export default JobOffer