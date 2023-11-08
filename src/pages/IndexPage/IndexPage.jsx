import JobTable from '../../components/JobTable/JobTable';
import AddBtn from '../../components/AddBtn/AddBtn';
import InfoBtn from '../../components/InfoBtn/InfoBtn';
import * as jobsAPI from '../../utilities/jobs-api';
import { useState, useEffect } from 'react';
import './IndexPage.css';

export default function IndexPage({ user }) {
    const [jobs, setJobs] = useState([]);
    useEffect(function () {
        async function getJobs() {
            const allJobs = await jobsAPI.getJobs();
            console.log(allJobs, 'ALL JOBS');
            setJobs(allJobs);
        }
        getJobs();
    }, [setJobs, user]);

    return (
        <div className='IndexPage'>
            <JobTable jobs={jobs} setJobs={setJobs} />
            <AddBtn />
            <InfoBtn />
        </div>
    );
}