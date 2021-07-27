require('dotenv').config(); 
const db = require('../config/connection');
const { Category, Item, League, Team, User } = require('../models');
const word = require('../utils/soundex');

const categoryData = require('./categoryData.json');
const itemData = require('./itemData.json');
const leagueData = require('./leagueData.json');
const teamData = require('./teamData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  // Clear the database
  await Category.deleteMany({});
  await Item.deleteMany({});
  await League.deleteMany({});
  await Team.deleteMany({});
  await User.deleteMany({});

  // Bulk Load the database
  const categories = await Category.insertMany(categoryData);
  const items = await Item.insertMany(itemData);
  const leagues = await League.insertMany(leagueData);
  const teams = await Team.insertMany(teamData);
  const users = await User.insertMany(userData);

  // Assign subcategories to categories
  for (newCategory of categories) {
    switch (newCategory.name) {
      case 'Card':
        console.log( `${newCategory.name} - Player` );
        newCategory.subcategories.push("Player");
        console.log( `${newCategory.name} - Rookie` );
        newCategory.subcategories.push("Rookie");
        await newCategory.save();
        break;
      case "Miscellaneious":
        console.log( `${newCategory.name} - Program` );
        newCategory.subcategories.push("Program");
        console.log( `${newCategory.name} - Roster` );
        newCategory.subcategories.push("Roster");
        console.log( `${newCategory.name} - Ticket` );
        newCategory.subcategories.push("Ticket");
        await newCategory.save();
        break;
      case "Picture":
        console.log( `${newCategory.name} - Picture` );
        newCategory.subcategories.push("Picture");
        await newCategory.save();
        break;
      case "Sports Equipment": 
        console.log( `${newCategory.name} - Baseball Bat` );
        newCategory.subcategories.push("Baseball Bat");
        console.log( `${newCategory.name} - Baseball Glove` );
        newCategory.subcategories.push("Baseball Glove");
        console.log( `${newCategory.name} - Baseball` );
        newCategory.subcategories.push("Baseball");
        console.log( `${newCategory.name} - Football` );
        newCategory.subcategories.push("Football");
        await newCategory.save();
        break;
      case "Uniform":
        console.log( `${newCategory.name} - Cap` );
        newCategory.subcategories.push("Cap");
        console.log( `${newCategory.name} - Helmet` );
        newCategory.subcategories.push("Helmet");
        console.log( `${newCategory.name} - Jersey` );
        newCategory.subcategories.push("Jersey");
        console.log( `${newCategory.name} - Shoes` );
        newCategory.subcategories.push("Shoes");
        console.log( `${newCategory.name} - Shorts` );
        newCategory.subcategories.push("Shorts");
        await newCategory.save();
        break;
    }
  }

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

  // Build playerSoundex in items
  for (newItem of items) {
    newItem.playerSoundex = word.soundex(newItem.playerName);
    console.log(`Item: ${newItem.title} PlayerName: ${newItem.playerName} PlayerSoundex: ${newItem.playerSoundex}`);
    await newItem.save();
  }

  // Assign items to Omari
  console.log( `${users[1].username} - ${items[0]._id}, ${items[0].title}` );
  users[1].items.push(items[0]._id);
  console.log( `${users[1].username} - ${items[2]._id}, ${items[2].title}` );
  users[1].items.push(items[2]._id);
  console.log( `${users[1].username} - ${items[3]._id}, ${items[3].title}` );
  users[1].items.push(items[3]._id);
  console.log( `${users[1].username} - ${items[4]._id}, ${items[4].title}` );
  users[1].items.push(items[4]._id);
  console.log( `${users[1].username} - ${items[6]._id}, ${items[6].title}` );
  users[1].items.push(items[6]._id);
  console.log( `${users[1].username} - ${items[7]._id}, ${items[7].title}` );
  users[1].items.push(items[7]._id);
  await users[1].save();

  // Assign items to David
  console.log( `${users[3].username} - ${items[1]._id}, ${items[1].title}` );
  users[3].items.push(items[1]._id);
  console.log( `${users[3].username} - ${items[5]._id}, ${items[5].title}` );
  users[3].items.push(items[5]._id);
  await users[3].save();

  console.log('Data Loaded!');
  process.exit(0);
});
