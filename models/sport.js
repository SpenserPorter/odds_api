/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sport', {
    sport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sport_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'sport'
  });
};
