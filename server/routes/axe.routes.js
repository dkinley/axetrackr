const AxeController = require('../controllers/axe.controller');
// the routes needs to pull in the controller

module.exports = (app) => { // need the express server app to
    app.get('/api/axe', AxeController.getAll);  //get takes two parameters, first is the url
    app.post('/api/axe', AxeController.create);
    app.get('/api/axe/:id', AxeController.details);
    app.put('/api/axe/:id', AxeController.edit);
    app.delete('/api/axe/:id', AxeController.delete);
} 