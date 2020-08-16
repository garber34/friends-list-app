const Sequelize =require('sequelize');
const db = new Sequelize("postgres://localhost:5432/friends_list");

const Friends = db.define("friends",{
  name: {
    type: Sequelize.STRING,
      allowNull:false,
      unique:true
  },
  rating:{
    type:Sequelize.INTEGER,
    allowNull:false,
    validations:{
      min:0,
      defaultValue:5

    }
  }
})

module.exports={Friends,db};
