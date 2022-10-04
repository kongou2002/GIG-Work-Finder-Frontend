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
            const jobList = await (await jobOfferApi.getAll()).data;
            setRepo(jobList);
        }
        fetchJobOffer();
    }, []);
    return (
        <div className='box-job'>
            {repo.map((jobLists) => (
                <div className='column' key={jobLists.offerID}>
                    <div className='card'>
                        <img src={logo} alt='' style={{ width: "100px" }} />
                        <h1>{jobLists.userID}</h1>
                        <div className='description'>
                            <h1>{jobLists.title} - (địt m3 lz nào để lộn data title vs description)</h1>
                            <p>{jobLists.jobDescription} - (làm mò css cả buổi)</p>
                            <p>{jobLists.salary}</p>
                            <p>{jobLists.address}</p>
                            <p className='film-button'>
                                <button >
                                    <Link to={`detail/${jobLists.offerID}`}>detail</Link>
                                </button></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JobOffer