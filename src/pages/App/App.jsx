
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import IndexPage from '../IndexPage/IndexPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import * as jobsAPI from '../../utilities/jobs-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jobs, setJobs] = useState([]);
  useEffect(function () {
    async function getJobs() {
      if (user) {
        const allJobs = await jobsAPI.getJobs();
        setJobs(allJobs);
      }
    }
    getJobs();
  }, [setJobs, user]);

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<IndexPage jobs={jobs} setJobs={setJobs} />} />
            <Route path="/dashboard" element={<DashboardPage user={user} jobs={jobs} setJobs={setJobs} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
