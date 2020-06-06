// API Key
import { NASA_API_KEY } from '../constants/keys';

// TechPort data
const requestUrlGet = `https://api.nasa.gov/techport/api/projects`;
// Fireball data
const requestUrlFireball = `https://ssd-api.jpl.nasa.gov/fireball.api?limit=20`;
// TLE data
const requestUrlTle = 'http://data.ivanstanojevic.me/api/tle/';
// ExoPlanet data
const requestUrlExoPlanet = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json'

const options = {
    method: 'GET'
};

// GET the TechPort data
export const getProjectById = async (projectId) => {
    try {
        const response = await fetch(`${requestUrlGet}/${projectId}?api_key=${NASA_API_KEY}`, options);            
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    }
    catch (error) {
        throw new Error(error);
    }
};

// GET the 
export const getFireballs = async () => {
    try {
        const response = await fetch(`${requestUrlFireball}`, options);            
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    }
    catch (error) {
        throw new Error(error);
    }
};

// GET the TLE data
export const getSatData = async (satNo) => {
    const options = {
        method: 'GET'
    };
    try {
        const response = await fetch(requestUrlTle + satNo, options);            
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    }
    catch (error) {
        throw new Error(error);
    }
};

