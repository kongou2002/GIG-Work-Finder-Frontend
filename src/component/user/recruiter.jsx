import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import userApi from '../../api/userApi';
import { useEffect } from 'react';

function Recruiter() {
    const id = useParams
    const [repo, setRepo] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchJobOffer = async () => {
            const jobList = await userApi.getRecruiterID(id.id);
            setRepo(jobList);
            setLoading(false)
        }
        fetchJobOffer();
    }, []);
    return (
        <div></div>
    )
}

export default Recruiter