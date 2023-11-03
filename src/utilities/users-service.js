// service modules export business/app logic such as managing tokens, etc...
// they often depend upon API modules for  making AJAX requests to the server

import * as usersAPI from './users-api';

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
}

export async function login(userCredentials) {
    const token = await usersAPI.login(userCredentials);
    localStorage.setItem('token', token);
    return getUser();
}

export function logOut() {
    localStorage.removeItem('token')
}

export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    // JWT exp is expressed in s not ms
    if (payload.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function checkToken() {
    return usersAPI.checkToken()
        .then(dateStr => new Date(dateStr));
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

