var notes = require('../Controleur/controle');


module.exports.route =function (app) {

app.route('/list')
  .post(notes.PosteList)
  .get(notes.GetList)

  app.route('/prof')
  .post(notes.PosteProf)
  .get(notes.GetProf)

  app.route('/eleveProf/:id')
  .get(notes.findOne)
}
