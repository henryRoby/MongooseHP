import React, { Component } from 'react'
import { connect } from 'react-redux'



class Eleve extends Component {

    componentDidUpdate() {
        console.log("componentDidUpdate : ")
        console.log(this.props.eleve)
    }

    constructor() {
        super()
        this.state = {
            nom: '',
            prenom:'',
            age:'',
            classe:''
        }
        this.onChange = this.onChange.bind(this)
        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this.onChange3 = this.onChange3.bind(this)
    }
   
    onChange(event) {
        this.setState({
            nom: event.target.value
        })
    }
    onChange1(event) {
        this.setState({
            prenom: event.target.value
        })
    }
    onChange2(event) {
        this.setState({
            age: event.target.value
        })
    }
    onChange3(event) {
        this.setState({
            classe: event.target.value
        })
    }

    _poste(e) {
        const action = { type: "POSTER_ELEVE", value: e }
        this.props.dispatch(action)
    }


    render() {
        return (
            <div>
                <form>
                    <label>nom:</label>
                    <input type="text"
                        value={this.state.value}
                        onChange={this.onChange}
                        name="nom" />
                    <label>prenom:</label>
                    <input type="text"
                        value={this.state.value}
                        onChange={this.onChange1}
                        name="prenom" />
                    <label>age:</label>
                    <input type="text"
                        value={this.state.value}
                        onChange={this.onChange2}
                        name="age" />
                    <label>classe:</label>
                    <input type="text"
                        value={this.state.value}
                        onChange={this.onChange3}
                        name="classe" />
                    <button onClick={(e)=>{
                       
                        this._poste({
                        nom:this.state.nom,
                        prenom:this.state.prenom,
                        age:this.state.age,
                        classe:this.state.classe
                    })}}>ajout</button>
                    
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        eleve: state.eleve
    }
}
export default connect(mapStateToProps)(Eleve)
