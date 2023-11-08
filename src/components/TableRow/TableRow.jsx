import { useState } from 'react';
import './TableRow.css'

export default function TableRow({ job, num }) {
    const [isEditing, setIsEditing] = useState(false);

    async function handleClick() {
        setIsEditing(true);
    }

    async function handleSave() {
        setIsEditing(false);
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
            <td onClick={handleClick} className={status} onBlur={handleSave}>
                {isEditing ? (
                    <select name="status" id="status">
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
            <td>{job.title}</td>
            <td>{job.company}</td>
            <td>{job.type}</td>
            <td>{job.location}</td>
            <td>${job.salary}</td>
            <td><a target="_blank" rel="noreferrer" href={job.url}>{job.url.substring(0, 20) + '...'}</a></td>
            <td>{job.suitability}</td>
        </tr>
    );
}