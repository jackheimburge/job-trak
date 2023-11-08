

export default function TableRow({ job }) {
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
        <tr>
            <td>{`${parts[1]}-${parts[2]}-${parts[0]}`}</td>
            <td className={status}>{job.status}</td>
            <td>{job.title}</td>
            <td>{job.company}</td>
            <td>{job.type}</td>
            <td>{job.location}</td>
            <td>${job.salary}</td>
            <td>{job.description}</td>
            <td>{job.suitability}</td>
        </tr>
    );
}