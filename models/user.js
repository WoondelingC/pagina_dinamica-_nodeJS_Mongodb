const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');
const uuid = require('uuid');


const userSchema = new Schema({
    gamer: [{
            _id: uuid,
            type: String,
            trim: true,
            required: true
        }],

    bet:[{
            _id: uuid,
            type: Number,
            min: 1,
            max: 6,
            required: true
        }]
}, { timestamps: true });

userSchema.plugin(mongooseSoftDelete);

module.exports = User = mongoose.model('User', userSchema);