import JobTable from '../../components/JobTable/JobTable';
import * as jobsAPI from '../../utilities/jobs-api';
import { useEffect } from 'react';
import './IndexPage.css';

export default function IndexPage({ jobs, setJobs }) {

    return (
        <div className='IndexPage'>
            <JobTable jobs={jobs} setJobs={setJobs} />
        </div>
    );
}