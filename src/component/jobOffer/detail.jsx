import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jobOfferApi from '../../api/JobOffer';
function Detail() {
    const id = useParams();
    const [repo, setRepo] = useState([]);
    useEffect(() => {
        const fetchJobOffer = async () => {
            const jobList = await (await jobOfferApi.getID(id.id)).data;
            setRepo(jobList);
        }
        fetchJobOffer();
    }, []);
  return (
    <div className='container'>
        <div>
          <p>{repo.address}</p>
        </div>
    </div>
  )
}

export default Detail