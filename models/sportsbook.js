/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sportsbook', {
    sportsbook_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sportsbook_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'sportsbook'
  });
};
