require('dotenv').config()
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const VC_KEY = process.env.WEATHER_API_KEY;
const VC_BASE = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'

// Simple in-memory memory cache
const cache = new Map();
const CACHE_TTL = 1000 * 60 *2 //2 minutes

app.use(cors()); //only for development
console.log("VC_KEY loaded?", !!VC_KEY)
/**
 * GET /api/weather
 * required query params: location
 * optional query params:
 *  - date (YYY-MM-DD or period like 7 days)
 *  - unitGroup (metric or us) default 'metric'
 * 
 * Example:
 *  /api/weather?location=Johannesburg&unitGroup=metric
 *  /api/weather?lcation=London, UK&date=2025-09-10 
 */

app.get('/api/weather', async (req, res) => {
    try{
        const location = req.query.location;
        const date = req.query.date;
        const unitGroup = req.query.unitGroup || 'metric';

        if (!location) return res.status(400).json({error: 'missing location query parameter'});
        if (!VC_KEY)return res.status(500).json({error: 'Server is missing API key'});

        const cacheKey = `${location}__${date || 'forecast'}__${unitGroup}`;
        const cached = cache.get(cacheKey);
        if (cached && (Date.now() - cached.ts) < CACHE_TTL){
            return res.json({source: "cache", data: cached.data});
        }

        //Build Visual Crossing URL
        // base/timeline/{location}/{date?}?unitGroup=...&key=...&contentType=json
        let path = `${VC_BASE}/${encodeURIComponent(location)}`;
        if (date) path += `${encodeURIComponent(date)}`;
        const url = `${path}?unitGroup=${encodeURIComponent(unitGroup)}&key=${encodeURIComponent(VC_KEY)}&contentType=json`;

        //Call Visual Crossing
        console.log("Requesting:", url)
        const vcResponse = await axios.get(url, {timeout: 10000});

        // Cache and return
        cache.set(cacheKey, {ts: Date.now(), data: vcResponse.data});
        return res.json({source: 'visualcrossing', data: vcResponse.data});
    }catch (err){
        console.log('Error fetching weather:', err.message || err);
        return res.status(500).json({error: 'Failed to fetch weather', details: err.message || err});
    
    }
});

app.get('/', (req, res) => res.send('Weather API proxy is running'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));