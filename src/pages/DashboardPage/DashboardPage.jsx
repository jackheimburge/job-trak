
import AnalyticsChart from '../../components/AnalyticsChart/AnalyticsChart';
import './DashboardPage.css';

export default function DashboardPage({ jobs }) {
    const curMonth = new Date().getUTCMonth() + 1;
    const curYear = new Date().getUTCFullYear();
    const jobsCurMonth = jobs.filter((job) => {
        const jobMonth = new Date(job.date).getUTCMonth() + 1;
        return !isNaN(jobMonth) && jobMonth === curMonth;
    });
    const jobsCurYear = jobs.filter((job) => {
        const jobYear = new Date(job.date).getUTCFullYear();
        return !isNaN(jobYear) && jobYear === curYear;
    });


    return (
        <div className="DashboardPage">
            <div>Total jobs Applied: {jobs.length}</div>
            <div>Total jobs Rejected: {jobs.filter((job) => job.status === 'Rejected').length}</div>
            <div>Total jobs Applied to this month: {jobsCurMonth.length}</div>
            <div>Total jobs Applied to this year: {jobsCurYear.length}</div>
        </div>

    );
}