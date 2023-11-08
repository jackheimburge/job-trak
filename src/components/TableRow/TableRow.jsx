

export default function TableRow({ job }) {
    const dateParts = job.date.split('T')
    const parts = dateParts[0].split('-');
    return (
        <tr>
            <td>{`${parts[1]}-${parts[2]}-${parts[0]}`}</td>
            <td>{job.status}</td>
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