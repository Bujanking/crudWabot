import mongoose, { Schema } from 'mongoose'

const infoSchema = new Schema({
    email:{
        type: String,
        required: [true, 'Country is required'],
        trim: true,
    },
    country:{
        type: String,
        required: [true, 'Country is required'],
        trim: true,
    },
    city:{
        type: String,
        required: [true, 'City is required'],
        trim: true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

const Info = mongoose.models.Info || mongoose.model('Info', infoSchema)
export default Info;