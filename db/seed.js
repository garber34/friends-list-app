const Sequelize = require("sequelize");
const {Friends,db} = require("./index");
const faker = require("faker");

const fakeData = [];

for (let x = 0; x < 7; x++) {
  fakeData.push({
    name: faker.name.firstName(),
    rating: faker.random.number({'min':0, 'max':10}),
  });
}

async function syncAndSeed(){
await db.sync({force:true});
await Friends.bulkCreate(fakeData);
await db.close();
}

syncAndSeed();
