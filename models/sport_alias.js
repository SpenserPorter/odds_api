/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sport_alias', {
    sport_alias_id: {
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
      }
    },
    sport_alias: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'sport_alias'
  });
};
