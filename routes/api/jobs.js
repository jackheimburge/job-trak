const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//ALL routes start with '/api/jobs'
//GET '/api/jobs'
router.get('/', ensureLoggedIn, jobsCtrl.getAll);
//POST '/api/jobs'
router.post('/', ensureLoggedIn, jobsCtrl.add);
//PUT '/api/jobs/:id/edit
router.put('/:id/edit', ensureLoggedIn, jobsCtrl.update)

module.exports = router;