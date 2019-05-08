var Eleve = require('../Model/eleve.model');
var Prof = require('../Model/prof.model');

// Create tableau des eleves
module.exports.PosteEleve = function(req,res) {
   
    
    var nom = req.body.nom
    var prenom = req.body.prenom
    var age  = req.body.age
     var classe = req.body.classe
     
     Eleve.find()
            .then(note0 => {
                if(note0.length==0) {
                    id = 0;
                    console.log('mbola',id);
                    
                }else{
                    id = parseInt(note0[note0.length-1].id)+1;
                }

            const insert = new Eleve({_id:id,nom:nom,prenom:prenom,age:age,classe:classe});
            (!nom || !prenom)? console.log("reussi"):insert.save()
                .then(()=>{
                    Eleve.find()
                        .then(note=>{
                            res.send(note);
                        })
                })
                .catch(e=>{
                    res.status(500).send({mes:e.mes || "erreur"})
                })
            })
    }


    module.exports.GetEleve = (req, res) => {
        Eleve.find()
            .then(note=>{
                res.send(note)
            })
            .catch (e =>{
                res.status(500).send({mes:e.mes || "erreur"})
            });
    };
    
    //Post prof

    module.exports.PosteProf = function(req,res) {
   
        var nom = req.body.nom
        
        var prenom = req.body.prenom
        var matiere  = req.body.matiere
         var classe = req.body.classe
        Prof.find()
            .then(note => {
                if(note.length==0) {
                    id = 0;
                    console.log('mbola',id);
                    
                }else{
                    id = parseInt(note[note.length-1].id)+1;
                }
    
                const insert = new Prof({_id:id,nom:nom,prenom:prenom,matiere:matiere,classe:classe});
                (!nom || !prenom)? console.log("manque des données"):insert.save()
                    .then(()=>{
                        Prof.find()
                            .then(note=>{
                                res.send(note);
                            })
                    })
                    .catch(e=>{
                        res.status(500).send({mes:e.mes || "erreur"})
                    })
            })
        }


        module.exports.GetProf = (req, res) => {
            Prof.find()
                .then(note=>{
                    res.send(note)
                })
                .catch (e =>{
                    res.status(500).send({mes:e.mes || "erreur"})
                });
        };



        exports.findOne = (req, res) => {
            Eleve.find({_id:req.params.id})
            .then(note => {
                if(!note) {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.id
                    });        
                    
                
                }
                Prof.find()
                .then(prof=>{
                    for(let i =0 ;i< prof.length ;i++){
                       for(let prop in prof[i].classe){
                           if(note[0].classe == prof[i].classe[prop]){
                               note.push(prof[i])
                           }
                       }
                    }
                    console.log("voici prof",prof," voici eleve classe",note[0].classe);
                
                    res.send(note);
                })
                .catch (e =>{
                    res.status(500).send({mes:e.mes || "erreur prof"})
                });


                
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.id
                    });                
                }
                return res.status(500).send({
                    message: "Error retrieving note with id " + req.params.id
                });
            });
        };