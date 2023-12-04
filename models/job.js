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
    },
    company: {
        type: String,
    },
    type: {
        type: String,
        enum: ['Hybrid', 'Office', 'Remote'],
        default: 'Office'
    },
    salary: {
        type: Number,
    },
    url: {
        type: String,
    },
    location: {
        type: String,
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
