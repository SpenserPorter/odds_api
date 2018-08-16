/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team', {
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sport_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sport',
        key: 'sport_id'
      },
      unique: true
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'venue',
        key: 'venue_id'
      }
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'team'
  });
};
