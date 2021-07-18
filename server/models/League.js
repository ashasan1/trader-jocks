const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const leagueSchema = new Schema({
  leagueInitials: {
    type: String,
    required: 'League must have initials!',
    minlength: 3,
    maxlength: 4,
    trim: true,
  },
  leagueName: {
    type: String,
    required: true,
    trim: true,
  },
  leagueLogo: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  teams: [
    {
      cityName: {
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
      },
    },
  ],
});

const League = model('League', leagueSchema);

module.exports = League;