import { useState } from 'react';
import * as jobsAPI from '../../utilities/jobs-api';
import './TableRow.css'

export default function TableRow({ job, num, setJobs }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedJob, setUpdatedJob] = useState([]);

    async function handleClick() {
        setIsEditing(true);
    }

    async function handleChange(e) {
        setUpdatedJob({
            ...job,
            [e.target.name]: e.target.value
        })

    }

    async function handleSave() {
        const updatedJobs = await jobsAPI.update(updatedJob);
        setJobs(updatedJobs);
        setIsEditing(false);
    }

    async function handleDelete() {
        const updatedJobs = await jobsAPI.deleteJob(job._id);
        setJobs(updatedJobs);
    }

    const dateParts = job.date.split('T')
    const parts = dateParts[0].split('-');
    let status = '';
    if (job.status === 'Rejected') {
        status = 'red'
    } else if (job.status === 'Applied') {
        status = 'blue'
    } else if (job.status === 'Interview Scheduled' || job.status === 'Currently Interviewing') {
        status = 'yellow'
    } else if (job.status === 'Offer Received') {
        status = 'green'
    }
    return (
        <tr className="TableRow">
            <td id="NumTD">{num}</td>
            <td>{`${parts[1]}-${parts[2]}-${parts[0]}`}</td>
            <td className={status} onClick={handleClick} >
                {isEditing ? (
                    <select onChange={handleChange} onBlur={handleSave} name="status" id="status">
                        <option value="Applied">--Select--</option>
                        <option value="Applied">Applied</option>
                        <option value="Yet to Apply">Yet to Apply</option>
                        <option value="Interview Scheduled">Interview Scheduled</option>
                        <option value="Currently Interviewing">Currently Interviewing</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Offer Received">Offer Received</option>
                    </select>
                )
                    : (
                        <span>{job.status}</span>
                    )}</td>
            <td id='td-title'>
                {job.title}
            </td>
            <td>{job.company}</td>
            <td>{job.type}</td>
            <td>{job.location}</td>
            <td>${job.salary}</td>
            <td><a target="_blank" rel="noreferrer" href={job.url}>{job.url.substring(0, 20) + '...'}</a></td>
            <td>
                {Array.from({ length: job.suitability }, (_, index) => (
                    <span key={index}>⭐️</span>
                ))}
            </td>
            <td>
                <button onClick={handleDelete} className='delete-btn'>x</button>
            </td>
        </tr>
    );
}