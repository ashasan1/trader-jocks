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
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Team'
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const League = model('League', leagueSchema);

module.exports = League;
