const { Schema, model } = require('mongoose');

const UserSchema = new Schema (
    {
      username: {
        type: String,
        required: "Please enter a username",
        unique: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please enter a valid e-mail address"]
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought"
        }
      ], 
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      ] 
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );

// friend count
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// create the User model
const User = model('User', UserSchema);

module.exports = User;