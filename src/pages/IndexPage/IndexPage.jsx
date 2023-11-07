import './IndexPage.css';
import NewJobForm from '../../components/NewJobForm/NewJobForm';
import JobTable from '../../components/JobTable/JobTable';
import AddBtn from '../../components/AddBtn/AddBtn';
import InfoBtn from '../../components/InfoBtn/InfoBtn';

export default function IndexPage() {
    return (
        <div className='IndexPage'>
            <JobTable />
            <AddBtn />
            <InfoBtn />
        </div>
    );
}