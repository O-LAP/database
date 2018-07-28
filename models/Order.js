const mongoose = require('mongoose')




let OrderSchema = new mongoose.Schema(
    {
        owner: { type: String, required: true, trim: true },
        delivery_address: { type: String, required: true, trim: true },
        contact: { type: String, required: true },
        message: { type: String }, 
        created: { type: Date, default: Date.now },
        status: { type: String, default: 'requested' },
        data: Buffer,
    },
    {
        timestamps: true
    }
)





module.exports = mongoose.model('Order', OrderSchema)