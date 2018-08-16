/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spread_odds', {
    odds_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'odds',
        key: 'odds_id'
      }
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'team',
        key: 'team_id'
      }
    },
    spread: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'spread_odds'
  });
};
