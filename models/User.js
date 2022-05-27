const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
        type: String, 
        required: true, 
        unique: true, 
        trimmed: true
    },
    
    email: {
        type: String, 
        required: true, 
        unique: true,
        match:  /.+\@.+\..+/
    },

    thoughts: [{
        type: schema.Types.ObjectId, ref: 'thought'
    }],

    friends: [{
        type: schema.Types.ObjectId, ref: 'user'
    }]
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
}
);

postSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
