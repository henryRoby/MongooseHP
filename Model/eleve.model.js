const mongoose = require('mongoose');

const EleveSchema = mongoose.Schema({
    _id: {type:Number,required:true},
    nom: String,
    prenom: String,
    age :Number,
    classe:Number
}, {
    timestamps: true
});
/* _id: {type:Number,required:true} */

module.exports = mongoose.model('eleve', EleveSchema);