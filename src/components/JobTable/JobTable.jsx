import TableRow from '../TableRow/TableRow';
import NewEntryRow from '../NewEntryRow/NewEntryRow';
import './JobTable.css';


export default function JobTable({ jobs, setJobs }) {
    return (
        <div className='TableDiv'>
            <table className='JobTable'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Salary</th>
                        <th>Description</th>
                        <th>Suitability</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, idx) => <TableRow job={job} key={idx} />)}

                    <tr>
                        <td>11/8/2023</td>
                        <td>Denied</td>
                        <td>Python Developer</td>
                        <td>Spotify</td>
                        <td>Remote</td>
                        <td>N/A</td>
                        <td>$200,000</td>
                        <td>Backend Python developer role with spotify</td>
                        <td>⭐️</td>
                    </tr>
                    <NewEntryRow setJobs={setJobs} jobs={jobs} />
                </tbody>
            </table>
        </div>
    );
}