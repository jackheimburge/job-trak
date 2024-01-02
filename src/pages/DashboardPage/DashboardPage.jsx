
import './DashboardPage.css';

export default function DashboardPage({ jobs }) {
    const date = new Date();
    let prevMonth, prevYear;
    if (date.getUTCMonth() === 0) {
        prevMonth = 12;
        prevYear = date.getUTCFullYear() - 1;
    } else {
        prevMonth = date.getUTCMonth();
        prevYear = date.getUTCFullYear();
    }

    const jobsPrevMonth = jobs.filter((job) => {
        const jobDate = new Date(job.date);
        const jobYear = jobDate.getUTCFullYear();
        const jobMonth = jobDate.getUTCMonth() + 1;
        return !isNaN(jobYear) && !isNaN(jobMonth) && jobYear === prevYear && jobMonth === prevMonth;
    });
    const curMonth = new Date().getUTCMonth() + 1;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const curYear = new Date().getUTCFullYear();
    const jobsCurMonth = jobs.filter((job) => {
        const jobDate = new Date(job.date);
        const jobYear = jobDate.getUTCFullYear();
        const jobMonth = jobDate.getUTCMonth() + 1;
        return !isNaN(jobYear) && !isNaN(jobMonth) && jobYear === curYear && jobMonth === curMonth;
    });

    const jobsCurYear = jobs.filter((job) => {
        const jobYear = new Date(job.date).getUTCFullYear();
        return !isNaN(jobYear) && jobYear === curYear;
    });

    const monthlyDiff = jobsCurMonth.length - jobsPrevMonth.length;


    return (
        <div className="DashboardPage">
            <div className='curMonth'>
                <h2>Analytics for {months[curMonth - 1]},&nbsp; {curYear}</h2>
                <div>Applications: {jobsCurMonth.length} <span style={{ color: monthlyDiff >= 0 ? 'green' : 'red' }}>({monthlyDiff >= 0 ? '+' : ''}{monthlyDiff})</span></div>
                <div>Rejections: {jobsCurMonth.filter((job) => job.status === 'Rejected').length}</div>
                <div>Interviews: {jobsCurMonth.filter((job) => job.status === 'Currently Interviewing' || job.status === 'Interview Scheduled').length}</div>

            </div>
            <div className='prevMonth'>
                <h2>Analytics for {months[prevMonth - 1]},&nbsp; {prevYear}</h2>
                <div>Applications: {jobsPrevMonth.length}</div>
                <div>Rejections: {jobsPrevMonth.filter((job) => job.status === 'Rejected').length}</div>
            </div>
            <div className="total">
                <h2>Overall Stats</h2>
                <div>Applications This Year: {jobsCurYear.length}</div>
                <div>All Time Applications: {jobs.length}</div>
                <div>Interviews: {jobs.filter((job) => job.status === 'Currently Interviewing' || job.status === 'Interview Scheduled').length}</div>
                <div>Offers: {jobs.filter((job) => job.status === 'Offer Received').length}</div>
            </div>
        </div>

    );
}