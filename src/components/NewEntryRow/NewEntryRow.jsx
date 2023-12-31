import { useState } from 'react';
import './NewEntryRow.css';
import * as jobsAPI from '../../utilities/jobs-api';

export default function NewEntryRow({ setJobs, jobs }) {

    const [job, setJob] = useState({
        date: '',
        status: 'Applied',
        title: '',
        company: '',
        type: 'Office',
        location: '',
        salary: '',
        url: '',
        suitability: 3
    });
    const [isUploading, setIsUploading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsUploading(true);
        try {
            const jobToSend = Object.fromEntries(Object.entries(job).filter(([key, value]) => value !== ''));
            const addedJob = await jobsAPI.add(jobToSend);
            setJobs([...jobs, addedJob]);
            setJob({
                date: '',
                status: 'Applied',
                title: '',
                company: '',
                type: 'Office',
                location: '',
                salary: 50000,
                url: '',
                suitability: 3
            });
            setIsUploading(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <tr className='NewEntryRow'>
                <td></td>
                <td>
                    <input name='date' onChange={handleChange} type="date" value={job.date} />
                </td>
                <td>
                    <select onChange={handleChange} name="status" id="status">
                        <option value="Applied">-- Status --</option>
                        <option value="Applied">Applied</option>
                        <option value="Yet to Apply">Yet to Apply</option>
                        <option value="Interview Scheduled">Interview Scheduled</option>
                        <option value="Currently Interviewing">Currently Interviewing</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Offer Received">Offer Received</option>
                    </select>
                </td>
                <td>
                    <input onChange={handleChange} name='title' value={job.title} type="text" />
                </td>
                <td>
                    <input onChange={handleChange} name='company' value={job.company} type="text" />
                </td>
                <td>
                    <select onChange={handleChange} name="type" id="type">
                        <option value="Office">- Type -</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Office">Office</option>
                        <option value="Remote">Remote</option>
                    </select>
                </td>
                <td>
                    <input onChange={handleChange} name='location' value={job.location} type="text" />
                </td>
                <td>
                    <input onChange={handleChange} name='salary' value={job.salary} type="number" />
                </td>
                <td>
                    <input onChange={handleChange} name='url' value={job.url} type="text" />
                </td>
                <td>
                    <select defaultValue={3} onChange={handleChange} name="suitability" id="suitability">
                        <option value="1">⭐️</option>
                        <option value="2">⭐️⭐️</option>
                        <option value="3">⭐️⭐️⭐️</option>
                        <option value="4">⭐️⭐️⭐️⭐️</option>
                        <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
                    </select>
                </td>
                <td><button onClick={handleSubmit} disabled={isUploading}>+</button></td>
            </tr>
        </>
    );
}