const mongoose = require('mongoose');

const ProfSchema = mongoose.Schema({
    _id: {type:Number,required:true},
    nom: String,
    prenom: String,
    matiere:String,
    classe:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('prof', ProfSchema);