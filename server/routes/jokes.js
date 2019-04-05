const debug = require('debug')('server:db');
const router = require('express').Router();
const axios = require('axios');

const restricted = require('../middleware/restricted');

router.get('/', restricted, async (req, res) => {
  const url = 'https://icanhazdadjoke.com/search';
  const requestOptions = {
    headers: { accept: 'application/json' }
  };

  try {
    const success = await axios.get(url, requestOptions);
    res.status(200).json(success.data.results);
  } catch (error) {
    debug(error);
    res.status(500).json({
      message: 'Error Fetching Jokes'
    });
  }
});

module.exports = router;
