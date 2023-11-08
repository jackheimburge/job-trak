import sendRequest from './send-request';
const BASE_URL = '/api/jobs';

export function add(job) {
    return sendRequest(BASE_URL, 'POST', job);
}