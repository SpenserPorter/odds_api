/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('total_odds', {
    odds_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'odds',
        key: 'odds_id'
      }
    },
    total_score: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'total_odds'
  });
};
