/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('odds', {
    odds_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    odds_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'odds_type',
        key: 'odds_type_id'
      },
      unique: true
    },
    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vendor',
        key: 'vendor_id'
      }
    },
    sportsbook_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sportsbook',
        key: 'sportsbook_id'
      }
    },
    game_id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
      references: {
        model: 'game',
        key: 'game_id'
      }
    },
    offered_time_epoch_ms: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    odds: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    half: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    tableName: 'odds'
  });
};
