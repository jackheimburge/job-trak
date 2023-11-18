import AnalyticsChart from '../../components/AnalyticsChart/AnalyticsChart';
import './DashboardPage.css';

export default function DashboardPage({ jobs, setJobs }) {

    return (
        <div className="DashboardPage">
            <div>Total jobs Applied: {jobs.filter((job) => job.status === 'Applied').length}</div>
            <div>Total jobs Applied: {jobs.length}</div>
        </div>

    );
}