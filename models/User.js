const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },

        thoughts: {

        },

        friends: {

        },
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);