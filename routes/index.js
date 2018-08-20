const express = require('express');

const router = express.Router();

router.get('/api/v1', (req, res) => {
  res.json({
    status: 'success',
    message: 'Basic Json API',
    data: {
      'version_number': 'v1.0.0'
    }
  });
});

module.exports = router;