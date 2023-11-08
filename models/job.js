const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Interested', 'Applied', 'Interview Scheduled', 'Interview Process', 'Rejected', 'Offer received', 'Accepted'],
        required: true
    },
    title: {
        type: String,
    },
    company: {
        type: String,
    },
    type: {
        type: String,
        enum: ['Hybrid', 'Office', 'Remote']
    },
    salary: {
        type: Number,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    suitability: {
        type: String,
        enum: [1, 2, 3, 4, 5]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Job', jobSchema);
