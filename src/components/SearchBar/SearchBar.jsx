import { useEffect, useState, useRef } from "react";

export default function SearchBar({ jobs, setFilteredJobs }) {
    const delayMs = 100;
    const timerIdRef = useRef();
    const [filterText, setFilterText] = useState('');

    useEffect(function () {
        function doFilter() {
            const re = new RegExp(`.*${filterText}.*`, 'i');
            const filterByText = jobs.filter(job => re.test(job.company) || re.test(job.title) || re.test(job.location));
            setFilteredJobs(filterByText);
        }
        clearTimeout(timerIdRef.current);
        timerIdRef.current = setTimeout(doFilter, delayMs);
    }, [filterText, jobs, setFilteredJobs]);

    return (
        <div className='SearchBar'>
            <input value={filterText} type="text" placeholder="Search for an job application" onChange={(evt) => setFilterText(evt.target.value)} />
        </div>
    );
}