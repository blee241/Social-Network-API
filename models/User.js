const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, required: true, unique: true, match: /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/ },
    thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

userSchema.virtual('friendCount').get(function() {
    return this.thoughts.length;
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: { type: String, minlength: 1, maxlength: 280 }, required: true },
    createdAt: { type: Date, default: Date.now, get: function(timestamp) {
        const date = new Date(timestamp);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }},
    username: { type: String, required: true },
    reactions: [reactionSchema]
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const reactionSchema = new mongoose.Schema({
    reactionId: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    reactionBody: { type: { type: String, minlength: 1, maxlength: 280 }, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: function(timestamp) {
        const date = new Date(timestamp);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }}
})