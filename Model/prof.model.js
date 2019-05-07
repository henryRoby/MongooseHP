const mongoose = require('mongoose');

const ProfSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    matiere:String,
    classe:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('prof', ProfSchema);