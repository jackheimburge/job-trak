const Job = require('../../models/job');

module.exports = {
    add,
    getAll
}

async function add(req, res) {
    req.body.user = req.user._id;
    const newJob = await Job.create(req.body);
    res.json(newJob);
}

async function getAll(req, res) {
    const userJobs = await Job.find({ user: req.user._id })
    res.json(userJobs);
    console.log('user jobs', userJobs)
}