const mongoose = require('mongoose');

var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 2
  }
});

module.exports = {User};
