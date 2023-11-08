const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//ALL routes start with '/api/jobs'
//POST '/api/jobs'
router.post('/', ensureLoggedIn, jobsCtrl.add)

module.exports = router;