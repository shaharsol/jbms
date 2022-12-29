const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class User extends Model {}

  User.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: 'users',
    underscored: true,
    indexes: [
      {
        fields: ['username'],
        unique: true,
      },
    ],
  });

  return User;
};
