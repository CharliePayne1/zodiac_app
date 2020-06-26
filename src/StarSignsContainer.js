import React from 'react'
import StarSignCard from './StarSignCard'

export default class StarSignsContainer extends React.Component {
    state = {
      starSigns: []
      }

    componentDidMount() {
      fetch('https://zodiacal.herokuapp.com/api')
      .then(resp => resp.json())
      .then(data => this.setState({starSigns: data}))
      .catch(error => console.log(error.message));
      }
      
  render() {
    return (
      <div>
        <h5>Star Signs Container</h5>
        {this.componentDidMount()}
        <StarSignCard/>
      </div>
    )
  }
}