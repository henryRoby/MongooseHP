import React from 'react'
import Eleve from './Component/Eleve'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
           < Eleve/>
        </Provider>
      </div>
    )
  }
}
