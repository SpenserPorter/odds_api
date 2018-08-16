/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sport_alias_by_vendor', {
    sport_alias_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sport_alias',
        key: 'sport_alias_id'
      }
    },
    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vendor',
        key: 'vendor_id'
      }
    }
  }, {
    tableName: 'sport_alias_by_vendor'
  });
};
