import React, {Component} from 'react'
import APIs from './../Utilities/APIs'

export default class ListEmployees extends Component {
  componentDidMount(){
    APIs.listEmployees().then((allEmployees)=>{
      console.log(allEmployees);
    })
  }

  render(){
    return (
      <div className="mainContainer">

      </div>
    )
  }
}
