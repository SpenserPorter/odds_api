/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sportsbook_alias', {
    sportsbook_alias_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sportsbook_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sportsbook',
        key: 'sportsbook_id'
      }
    },
    sportsbook_alias: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'sportsbook_alias'
  });
};
