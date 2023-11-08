import { useState } from 'react';
import './NewEntryRow.css';
import * as jobsAPI from '../../utilities/jobs-api';

export default function NewEntryRow() {

    const [job, setJob] = useState({
        date: '',
        status: 'Applied',
        title: '',
        company: '',
        type: '',
        location: '',
        salary: '',
        description: '',
        suitability: 3
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const addedJob = await jobsAPI.add(job);

    }

    return (
        <>
            <tr className='NewEntryRow'>
                <td>
                    <input name='date' onChange={handleChange} type="date" value={job.date} />
                </td>
                <td>
                    <select onChange={handleChange} name="status" id="status">
                        <option value="Interested">Interested</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview Scheduled">Interview Scheduled</option>
                        <option value="Interview Process">Interview Process</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Offer Received">Offer Received</option>
                        <option value="Accepted">Accepted Offer</option>
                    </select>
                </td>
                <td>
                    <input onChange={handleChange} name='title' value={job.title} type="text" />
                </td>
                <td>
                    <input onChange={handleChange} name='company' value={job.company} type="text" />
                </td>
                <td>
                    <input onChange={handleChange} name='type' value={job.type} type="text" />
                </td>
                <td>
                    <input onChange={handleChange} name='location' value={job.location} type="text" />
                </td>
                <td>
                    <input onChange={handleChange} name='salary' value={job.salary} type="number" />
                </td>
                <td>
                    <input onChange={handleChange} name='description' value={job.description} type="text" />
                </td>
                <td>
                    <select onChange={handleChange} name="suitability" id="suitability">
                        <option value="1">⭐️</option>
                        <option value="2">⭐️⭐️</option>
                        <option value="3">⭐️⭐️⭐️</option>
                        <option value="4">⭐️⭐️⭐️⭐️</option>
                        <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
                    </select>
                </td>
            </tr>
            <button onClick={handleSubmit}>Submit</button>
            <h1>{job.date}</h1>
        </>
    );
}