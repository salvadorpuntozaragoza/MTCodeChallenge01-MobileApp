import { getItem } from "./asyncStoreManager";

const URL = 'http://10.0.2.2:3000/';

async function getAuthorizationToken() {
  const item = await getItem('session');
  if(item == null) {
    return item;
  }
  return item.token;
}

const fetchApi = async (url, method, params) => {
  try {
    const token = await getAuthorizationToken();
    console.log('Calling api with token: ', token);
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'access-token': token
      },
      body: (method === 'GET') ? null : JSON.stringify(params)
    });
    console.log(response);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('Error catched: ', error);
    return error;
  }
}

export const get = async (path, body = {}) => {
  const response = await fetchApi(`${URL}${path}`, 'GET', body);
  return response;
}

export const post = async (path, body = {}) => {
  const response = await fetchApi(`${URL}${path}`, 'POST', body);
  return response;
}

export const put = async (path, body = {}) => {
  const response = await fetchApi(`${URL}${path}`, 'PATCH', body);
  return response;
}

export const del = async (path, body = {}) => {
  const response = await fetchApi(`${URL}${path}`, 'DELETE', body);
  return response;
}