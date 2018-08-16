/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('line_url_scheduling', {
    normalized_url: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    sport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sport',
        key: 'sport_id'
      }
    },
    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vendor',
        key: 'vendor_id'
      }
    },
    event_time_epoch_ms: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'line_url_scheduling'
  });
};
