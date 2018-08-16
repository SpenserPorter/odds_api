const teamController = require('../controllers').team;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Team stuff with no method',
  }));
  app.get('/api/team', teamController.list);
};
