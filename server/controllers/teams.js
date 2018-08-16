const Team = require('../models').team;

module.exports = {
  list(req, res) {
  return Team
    .all()
    .then(team => res.status(200).send(team))
    .catch(error => res.status(400).send(error));
    },
};
