/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('odds_type', {
    odds_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    odds_type_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    odds_type_abbreviation: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'odds_type'
  });
};
