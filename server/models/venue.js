/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('venue', {
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year_opened: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'venue'
  });
};
