
import AnalyticsChart from '../../components/AnalyticsChart/AnalyticsChart';
import './DashboardPage.css';

export default function DashboardPage({ jobs }) {
    const curMonth = new Date().getUTCMonth() + 1;
    const jobsThisMonth = jobs.filter((job) => {
        // Assuming job.date is a string in the format 'YYYY-MM-DDTHH:mm:ss.sssZ'
        const jobMonth = new Date(job.date).getUTCMonth() + 1; // Extract month part from the timestamp

        return !isNaN(jobMonth) && jobMonth === curMonth;
    });

    return (
        <div className="DashboardPage">
            <div>Total jobs Applied: {jobs.length}</div>
            <div>Total jobs Rejected: {jobs.filter((job) => job.status === 'Rejected').length}</div>
            <div>Total jobs Applied to this month: {jobsThisMonth.length}</div>
        </div>

    );
}