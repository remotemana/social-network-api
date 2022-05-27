const { Schema, model } = require('mongoose');

const thoughSchema = new Schema(
  {
    thoughtText: {
        type: String, 
        required: true, 
        minlength: 1,
        maxlength: 280,
    },
    
    createdAt: {
        type: Date,
        default:Date.now
    },

    username: {
        type: String,
        required: true
    },

    reactions:[Reactions]
  },

  {
    toJSON: {
        timestamps: true,
      virtuals: true
    },
    id: false,
}
);

postSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
