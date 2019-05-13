var notes = require('../Controleur/controle');


module.exports.route =function (app) {

app.route('/eleve')
  .post(notes.PosteEleve)
  .get(notes.GetEleve)
  

  app.route('/prof')
  .post(notes.PosteProf)
  .get(notes.GetProf)
  

  app.route('/eleve/:id')
  .get(notes.findOne)
}
