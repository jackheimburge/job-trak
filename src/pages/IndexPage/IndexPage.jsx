import JobTable from '../../components/JobTable/JobTable';
import SearchBar from '../../components/SearchBar/SearchBar';
import './IndexPage.css';

export default function IndexPage({ jobs, setJobs, setFilteredJobs, filteredJobs }) {

    return (
        <div className='IndexPage'>
            <SearchBar jobs={jobs} setFilteredJobs={setFilteredJobs} />
            <JobTable jobs={filteredJobs} setJobs={setJobs} />
        </div>
    );
}