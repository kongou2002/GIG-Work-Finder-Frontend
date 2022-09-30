import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jobOfferApi from '../../api/JobOffer';

function Home() {
    const [repo, setRepo] = useState([]);
/* A hook that is called when the component is mounted. */
    useEffect(() => {
        const fetchJobOffer = async () => {
            const jobList = await (await jobOfferApi.getAll()).data;
            setRepo(jobList);
        }
        fetchJobOffer();
    }, []);
    console.log(repo)
  return (
    <div className='container'>
        {repo.map((jobLists)=>(
            <div className='column' key={jobLists.offerID}>
                <div className='card'>
                    <h1>{jobLists.accountID}</h1> 
                    <div className='description'>
                        <h3>{jobLists.title}</h3>
                        <p>{jobLists.typeID} - {jobLists.locationID}</p>
                        <p className='film-button'>
                            <button className='booking'>Book now</button>
                            <button /*onClick={() => { setFilm(film) }}*/>
                                <Link to={`detail/${jobLists.id}`}>detail</Link>
                            </button></p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Home