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
  const allItems = await Item.insertMany(itemData)
  const leagues = await League.insertMany(leagueData);
  const teams = await Team.insertMany(teamData);
  const users = await User.insertMany(userData)

  // Assign teams to leagues
  for (newLeague of leagues) {
    switch (newLeague.leagueInitials) {
      case 'NFL':
        for (let i = 0; i < 31; i++) {
          console.log( `${newLeague.leagueInitials} - ${teams[i]._id}, ${teams[i].teamName}` );
          newLeague.teams.push(teams[i]._id);
        }
        await newLeague.save();
        break;
      case 'NBA':
        for (let i = 32; i < 60; i++) {
          console.log( `${newLeague.leagueInitials} - ${teams[i]._id}, ${teams[i].teamName}` );
          newLeague.teams.push(teams[i]._id);
        }
        await newLeague.save();
        break;
      case 'WNBA':
        for (let i = 61; i < 72; i++) {
          console.log( `${newLeague.leagueInitials} - ${teams[i]._id}, ${teams[i].teamName}` );
          newLeague.teams.push(teams[i]._id);
        }
        await newLeague.save();
        break;
      case 'NHL':
        for (let i = 73; i < 101; i++) {
          console.log( `${newLeague.leagueInitials} - ${teams[i]._id}, ${teams[i].teamName}` );
          newLeague.teams.push(teams[i]._id);
        }
        await newLeague.save();
        break;
      case 'MLB':
        for (let i = 102; i < 130; i++) {
          console.log( `${newLeague.leagueInitials} - ${teams[i]._id}, ${teams[i].teamName}` );
          newLeague.teams.push(teams[i]._id);
        }
        await newLeague.save();
    }
  };

  // Assign items to Omari
  console.log( `${users[1].username} - ${allItems[0]._id}, ${allItems[0].title}` );
  users[1].items.push(allItems[0]._id);
  console.log( `${users[1].username} - ${allItems[2]._id}, ${allItems[2].title}` );
  users[1].items.push(allItems[2]._id);
  console.log( `${users[1].username} - ${allItems[3]._id}, ${allItems[3].title}` );
  users[1].items.push(allItems[3]._id);
  console.log( `${users[1].username} - ${allItems[4]._id}, ${allItems[4].title}` );
  users[1].items.push(allItems[4]._id);
  console.log( `${users[1].username} - ${allItems[6]._id}, ${allItems[6].title}` );
  users[1].items.push(allItems[6]._id);
  console.log( `${users[1].username} - ${allItems[7]._id}, ${allItems[7].title}` );
  users[1].items.push(allItems[7]._id);
  await users[1].save();

  // Assign items to David
  console.log( `${users[3].username} - ${allItems[1]._id}, ${allItems[1].title}` );
  users[3].items.push(allItems[1]._id);
  console.log( `${users[3].username} - ${allItems[5]._id}, ${allItems[5].title}` );
  users[3].items.push(allItems[5]._id);
  await users[3].save();

  console.log('Data Loaded!');
  process.exit(0);
});
