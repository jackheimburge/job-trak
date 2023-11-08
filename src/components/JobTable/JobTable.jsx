import TableRow from '../TableRow/TableRow';
import NewEntryRow from '../NewEntryRow/NewEntryRow';
import './JobTable.css';


export default function JobTable({ jobs, setJobs }) {
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
                        <th>Salary</th>
                        <th>URL</th>
                        <th>Suitability</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, idx) => <TableRow job={job} key={idx} num={idx + 1} />)}
                    <NewEntryRow setJobs={setJobs} jobs={jobs} />
                </tbody>
            </table>
        </div>
    );
}