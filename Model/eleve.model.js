const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    id:Number,
    nom: String,
    prenom: String,
    age :Number,
    classe:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('eleve', NoteSchema);