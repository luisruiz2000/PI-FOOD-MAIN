const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
   sequelize.define('TypeDiet', {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         allowNull: false,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         unique: true
      },
      createInDb: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: true,
      }
   }, {
      timestamps: false
   });
};