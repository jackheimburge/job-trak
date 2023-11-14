import sendRequest from './send-request';
const BASE_URL = '/api/jobs';

export function add(job) {
    return sendRequest(BASE_URL, 'POST', job);
}

export function getJobs() {
    return sendRequest(BASE_URL);
}

export function update(job) {
    return sendRequest(`${BASE_URL}/${job._id}/edit`, 'PUT', job);
}

export function deleteJob(jobId) {
    return sendRequest(`${BASE_URL}/${jobId}/delete`, 'DELETE');
}