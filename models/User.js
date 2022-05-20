const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique:true
    },
    email: {
      type: String,
      required: true,
      match:[/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,"must be valid email"],
      unique: true
    },
   
   
  friends: [
    {
      type: Schema.Types.ObjectId,
        ref: 'User'
    }
  ],
    thoughts:  [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    
  }
);

// get total count of thoughts and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;
