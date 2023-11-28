
import './DashboardPage.css';

export default function DashboardPage({ jobs }) {
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


    return (
        <div className="DashboardPage">
            <div className='curMonth'>
                <h2>Analytics for {months[curMonth - 1]},&nbsp; {curYear}</h2>
                <div>Applications: {jobsCurMonth.length}</div>
                <div>Rejections: {jobsCurMonth.filter((job) => job.status === 'Rejected').length}</div>
            </div>

            <div className="total">
                <h2>Overall Analytics</h2>
                <div>Applications This Year: {jobsCurYear.length}</div>
                <div>All Time Applications: {jobs.length}</div>
            </div>
        </div>

    );
}