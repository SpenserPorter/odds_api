/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team_alias', {
    team_alias_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'team',
        key: 'team_id'
      }
    },
    team_alias: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'team_alias'
  });
};
