import { useState } from 'react';
import TableRow from '../TableRow/TableRow';
import NewEntryRow from '../NewEntryRow/NewEntryRow';
import './JobTable.css';


export default function JobTable({ jobs, setJobs }) {
    const [sortSalaryOrder, setSalarySortOrder] = useState('asc');
    const [sortSuitOrder, setSortSuitOrder] = useState('asc');
    const [sortDateOrder, setDateOrder] = useState('asc');
    function handleSalaryClick() {
        const sortedJobs = [...jobs].sort((a, b) => {
            if (sortSalaryOrder === 'asc') {
                return a.salary - b.salary;
            } else {
                return b.salary - a.salary;
            }
        });
        setJobs(sortedJobs);
        setSalarySortOrder(sortSalaryOrder === 'asc' ? 'desc' : 'asc');
    }

    function handleSuitabilityClick() {
        const sortedJobs = [...jobs].sort((a, b) => {
            if (sortSuitOrder === 'asc') {
                return a.suitability - b.suitability;
            } else {
                return b.suitability - a.suitability;
            }
        });
        setJobs(sortedJobs);
        setSortSuitOrder(sortSuitOrder === 'asc' ? 'desc' : 'asc');
    }

    function handleDateClick() {
        const sortedJobs = [...jobs].sort((a, b) => {
            if (sortDateOrder === 'asc') {
                return new Date(a.date) - new Date(b.date);
            } else {
                return new Date(b.date) - new Date(a.date);
            }
        });
        setJobs(sortedJobs);
        setDateOrder(sortDateOrder === 'asc' ? 'desc' : 'asc');
    }
    return (
        <div className='TableDiv'>
            <table className='JobTable'>
                <thead>
                    <tr>
                        <th id='NumTH'>#</th>
                        <th onClick={handleDateClick}>Date<button>{sortDateOrder === 'asc' ? '↑' : '↓'}</button></th>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th onClick={handleSalaryClick}>Salary<button>{sortSalaryOrder === 'asc' ? '↑' : '↓'}</button></th>
                        <th>URL</th>
                        <th onClick={handleSuitabilityClick}>Suitability<button>{sortSuitOrder === 'asc' ? '↑' : '↓'}</button></th>
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