/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sportsbook_alias_by_vendor', {
    sportsbook_alias_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sportsbook_alias',
        key: 'sportsbook_alias_id'
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
    tableName: 'sportsbook_alias_by_vendor'
  });
};
