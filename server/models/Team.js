const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const teamSchema = new Schema({
      teamCity: {
        type: String,
        required: true,
        trim: true,
      },
      teamName: {
        type: String,
        required: true,
        trim: true,
      },
      teamLogo: {
        type: String,
        required: true,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      }
});

const Team = model('Team', teamSchema);

module.exports = Team;