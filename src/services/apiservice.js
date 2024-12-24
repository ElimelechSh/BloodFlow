export const API_URL = "http://localhost:3007";

import axios from 'axios';

export const doApiMethod = async (url, method, body = {}) => {
    
  const token = localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null;

  if (!token) {
    throw new Error('No token found in localStorage');
  }

  try {
    return await axios({
      method: method,
      url: `${API_URL}${url}`,
      headers: {
        'Authorization': `Bearer ${token}`, // Use Bearer token
      },
      responseType: 'json',
      data: body,
    });
  } catch (err) {
    throw err;
  }
};