const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Task extends Model {}

  Task.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Task', // We need to choose the model name
    tableName: 'tasks',
    underscored: true,
    indexes: [
      {
        fields: ['id'],
        unique: true,
      },
      {
        fields: ['user_id'],
        unique: false,
      },
    ],
  });

  return Task;
};
