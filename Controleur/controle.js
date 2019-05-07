var Note = require('../Model/eleve.model');
var Prof = require('../Model/prof.model');

// Create and Save a new Note
module.exports.PosteList = function(req,res) {
   
    var nom = req.body.nom
    var prenom = req.body.prenom
    var age  = req.body.age
     var classe = req.body.classe
     var id=req.body.id
   

            const insert = new Note({id:id,nom:nom,prenom:prenom,age:age,classe:classe});
            (!nom || !prenom)? console.log("manque des données"):insert.save()
                .then(()=>{
                    Note.find()
                        .then(note=>{
                            res.send(note);
                        })
                })
                .catch(e=>{
                    res.status(500).send({mes:e.mes || "erreur"})
                })
        
    }

    module.exports.GetList = (req, res) => {
        Note.find()
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
    
                const insert = new Prof({id:id,nom:nom,prenom:prenom,matiere:matiere,classe:classe});
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
            Note.find({id:req.params.id})
            .then(note => {
                if(!note) {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.id
                    });        
                    
                
                }
                Prof.find({classe:note[0].classe})
                .then(prof=>{
                    console.log("voici prof",prof," voici eleve classe",note[0].classe);
                    
                    let result=[]
                    result.push(note)
                    result.push(prof)
                    res.send(result);
                })
                .catch (e =>{
                    res.status(500).send({mes:e.mes || "erreur prof"})
                });


                
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.nom
                    });                
                }
                return res.status(500).send({
                    message: "Error retrieving note with id " + req.params.noteId
                });
            });
        };




//     if(!req.body.prenom) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }

//     // Create a Note
//     const note = new Note({
//         nom: req.body.nom || "Untitled Note", 
//         prenom: req.body.prenom
//     });

//     // Save Note in the database
//     note.save()
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the Note."
//         });
//     });
// };