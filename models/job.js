const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Yet to Apply', 'Applied', 'Interview Scheduled', 'Currently Interviewing', 'Rejected', 'Offer Received'],
        default: 'Applied'
    },
    title: {
        type: String,
        default: 'Job Title'
    },
    company: {
        type: String,
        default: 'Company Name'
    },
    type: {
        type: String,
        enum: ['Hybrid', 'Office', 'Remote'],
        default: 'Office'
    },
    salary: {
        type: Number,
        default: 50000
    },
    url: {
        type: String,
        default: 'https://www.google.com'
    },
    location: {
        type: String,
        default: 'City, State'
    },
    suitability: {
        type: String,
        enum: [1, 2, 3, 4, 5],
        default: 3
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
