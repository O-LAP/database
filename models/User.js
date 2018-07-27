const mongoose = require('mongoose')




// https://codeburst.io/build-simple-medium-com-on-node-js-and-react-js-a278c5192f47
let UserSchema = new mongoose.Schema(
    {
        first_name: { type: String, trim: true, required: true },
        last_name: { type: String, trim: true, required: true },
        email: { type: String, unique: true, lowercase: true, trim: true },
        password: String,
        join_date: { type: Date, default: Date.now },
        address: { type: String, trim: true },
        labels: [String],
        groups: [String],
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model('User', UserSchema)