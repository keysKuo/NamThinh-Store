const express = require('express');
const router = express.Router();

router.get('/:slug', (req, res, next) => {
    return res.render('collections');
})

module.exports = router;