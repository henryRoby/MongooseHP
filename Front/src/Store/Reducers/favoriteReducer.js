
import axios from 'axios'
const initialState = {
  eleve: [
    {
      nom: '',
      prenom: '',
      age: 0,
      classe: 0,
    }
  ]
}

function postEleve(state = initialState, action) {
  let nextState = {}
  switch (action.type) {
    case 'POSTER_ELEVE':
    axios.post('http://localhost:8080/eleve', {
      nom: action.value.nom,
      prenom: action.value.prenom,
      age:action.value.age,
      classe:action.value.classe
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
      console.log("etat favoris :", state.eleve)
      nextState = {
        ...state,
        eleve: action.value

      }

      return nextState

    default:
      return state
  }
}

export default postEleve