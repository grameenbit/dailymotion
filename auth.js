// Authentication logic for Dailymotion API

const axios = require('axios');

const CLIENT_ID = 'your_client_id';
const CLIENT_SECRET = 'your_client_secret';
const REDIRECT_URI = 'your_redirect_uri';

// Function to get an access token
async function getAccessToken(code) {
    const response = await axios.post('https://api.dailymotion.com/oauth/token', {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
        code: code
    });
    return response.data;
}

// Function to get user details with the access token
async function getUserDetails(accessToken) {
    const response = await axios.get('https://api.dailymotion.com/me', {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    return response.data;
}

module.exports = { getAccessToken, getUserDetails };