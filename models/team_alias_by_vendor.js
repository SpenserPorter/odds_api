/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team_alias_by_vendor', {
    team_alias_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'team_alias',
        key: 'team_alias_id'
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
    tableName: 'team_alias_by_vendor'
  });
};
