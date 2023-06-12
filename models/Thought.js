const mongoose = require('mongoose');

// reactionSchema defines the shape of the subdocument
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
});

// thoughtSchema defines the shape of the parent document
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

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;