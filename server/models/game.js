/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('game', {
    game_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    sport_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sport',
        key: 'sport_id'
      },
      unique: true
    },
    home_team_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'team',
        key: 'team_id'
      }
    },
    away_team_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'team',
        key: 'team_id'
      }
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'venue',
        key: 'venue_id'
      }
    },
    game_time_epoch_ms: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    }
  }, {
    tableName: 'game'
  });
};
