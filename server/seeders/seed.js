const db = require('../config/connection');
const { League } = require('../models');
const leagueSeeds = require('./leagueSeeds.json');

db.once('open', async () => {
  await League.deleteMany({});
  await League.create(leagueSeeds);

  console.log('all done!');
  process.exit(0);
});
