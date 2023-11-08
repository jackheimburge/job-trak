const Job = require('../../models/job');

module.exports = {
    add
}

async function add(req, res) {
    console.log('reached controller')
    req.body.user = req.user._id;
    const newJob = await Job.create(req.body);
    console.log('new job:', newJob);
    res.json(newJob);
}