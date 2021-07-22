const db = require('../config/connection');
const { Item, League, Team, User } = require('../models');

const itemData = require('./itemData.json');
const leagueData = require('./leagueData.json');
const teamData = require('./teamData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  // Clear the database
  await Item.deleteMany({});
  await League.deleteMany({});
  await Team.deleteMany({});
  await User.deleteMany({});

  // Bulk Load the database
  const items = await Item.insertMany(itemData)
  const leagues = await League.insertMany(leagueData);
  const teams = await Team.insertMany(teamData);
  const users = await User.insertMany(userData)

  // Assign teams to leagues
  for (newLeague of leagues) {
    switch (newLeague.leagueInitials) {
      case 'NFL':
        for (let i = 0; i < 31; i++) {
          console.log( `NFL - ${teams[i]._id}, ${teams[i].teamName}` );
          newLeague.teams.push(teams[i]._id);
        }
        await newLeague.save();
        break;
      case 'NBA':
        for (let i = 32; i < 60; i++) {
          console.log( `NFL - ${teams[i]._id}, ${teams[i].teamName}` );
          newLeague.teams.push(teams[i]._id);
        }
        await newLeague.save();
        break;
      case 'WNBA':
        for (let i = 61; i < 72; i++) {
          console.log( `NFL - ${teams[i]._id}, ${teams[i].teamName}` );
          newLeague.teams.push(teams[i]._id);
        }
        await newLeague.save();
        break;
      case 'NHL':
        for (let i = 73; i < 101; i++) {
          console.log( `NFL - ${teams[i]._id}, ${teams[i].teamName}` );
          newLeague.teams.push(teams[i]._id);
        }
        await newLeague.save();
        break;
      case 'MLB':
        for (let i = 102; i < 130; i++) {
          console.log( `NFL - ${teams[i]._id}, ${teams[i].teamName}` );
          newLeague.teams.push(teams[i]._id);
        }
        await newLeague.save();
    }
  };

  console.log('Data Loaded!');
  process.exit(0);
});
