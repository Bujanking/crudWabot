import mongoose, { Schema, models } from 'mongoose'

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address']
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps:true})

const User = models.User || mongoose.model('User', userSchema)
export default User;