import { useState } from 'react';
import TableRow from '../TableRow/TableRow';
import NewEntryRow from '../NewEntryRow/NewEntryRow';
import './JobTable.css';


export default function JobTable({ jobs, setJobs }) {
    const [sortOrder, setSortOrder] = useState('asc');
    function handleSalaryClick() {
        const sortedJobs = [...jobs].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.salary - b.salary;
            } else {
                return b.salary - a.salary;
            }
        });
        setJobs(sortedJobs);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }
    function handleSuitabilityClick() {
        const sortedJobs = [...jobs].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.suitability - b.suitability;
            } else {
                return b.suitability - a.suitability;
            }
        });
        setJobs(sortedJobs);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }
    return (
        <div className='TableDiv'>
            <table className='JobTable'>
                <thead>
                    <tr>
                        <th id='NumTH'>#</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th onClick={handleSalaryClick}>Salary</th>
                        <th>URL</th>
                        <th onClick={handleSuitabilityClick}>Suitability</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, idx) => <TableRow setJobs={setJobs} job={job} key={idx} num={idx + 1} />)}
                    <NewEntryRow setJobs={setJobs} jobs={jobs} />
                </tbody>
            </table>
        </div>
    );
}