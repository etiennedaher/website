import React, {Component} from 'react'
import APIs from './../Utilities/APIs'

export default class ListEmployees extends Component {
  state = {
    allEmployees : []
  }

  componentDidMount() {
    APIs.listEmployees().then((allEmployees)=>{
      this.setState({allEmployees: allEmployees})
    })
  }

  renderRows(each, index){
    return (
      <div key={index} className="eachRow">
        <img className="image" alt={each.name} src={each.picture}/>
        <div className="text">
          {each.name} - {each.jobTitle} - {each.location}
        </div>
      </div>
    )
  }

  renderEmployees(){
    let {allEmployees} = this.state
    let tempo = []

    allEmployees.forEach((each, index)=>{
      tempo.push(this.renderRows(each, index))
    })

    return (
      <div className="listContainer">
        {tempo}
      </div>
    )
  }

  render(){
    return (
      <div className="mainContainer">
        {this.renderEmployees()}
      </div>
    )
  }
}
