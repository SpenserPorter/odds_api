/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendor', {
    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vendor_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'vendor'
  });
};
