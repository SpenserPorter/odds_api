/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('money_line_odds', {
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
    }
  }, {
    tableName: 'money_line_odds'
  });
};
