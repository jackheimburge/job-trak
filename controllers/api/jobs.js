const Job = require('../../models/job');

module.exports = {
    add,
    getAll,
    update
}

async function add(req, res) {
    req.body.user = req.user._id;
    const newJob = await Job.create(req.body);
    res.json(newJob);
}

async function getAll(req, res) {
    const userJobs = await Job.find({ user: req.user._id })
    res.json(userJobs);
}

async function update(req, res) {
    await Job.findByIdAndUpdate(req.params.id, req.body);
    const allJobs = await Job.find({ user: req.user._id });
    res.json(allJobs);
}