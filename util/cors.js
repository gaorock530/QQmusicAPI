/**
 * @description Fix QQmusicApi server Cors problem
 * @readonly ORIGIN_ALLOW 
 */
const cors = require('cors')

// origin whitelist
const ORIGIN_ALLOW = [
  'http://localhost:3000'
]

const corsOptionsDelegate = function (req, callback) {
  // var corsOptions;
  // if (ORIGIN_ALLOW.indexOf(req.header('Origin')) !== -1) {
  //   corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  // } else {
  //   corsOptions = { origin: false } // disable CORS for this request
  // }
  const corsOptions = {
    origin: ORIGIN_ALLOW.indexOf(req.header('Origin')) !== -1,
    methods: ["GET", "POST", "OPTION", "PUT"],
    credentials: true
  }
  
  if (process.env !== 'production') console.log(`Incoming Origin: ${req.header('Origin')}, witch is set to {origin: ${corsOptions.origin}}`)
  callback(null, corsOptions) // callback expects two parameters: error and options
}

module.exports = cors(corsOptionsDelegate)