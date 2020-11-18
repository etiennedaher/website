import React, {Component} from 'react'
import APIs from './../Utilities/APIs'

export default class AddEmployee extends Component {

  componentDidMount(){

  }

  state = {
    name : '',
    picture : '',
    jobTitle : '',
    department : '',
    location : '',
  }

  handleChange(event, field) {
    this.setState({[field]: event.target.value});
  }

  renderInputs(field){
    return(<div><input className="inputFields" value={this.state[field]} onChange={(e)=>this.handleChange(e, field)} placeholder={`${field} ...`} /></div>)
  }

  onSubmit(){
    let {name, picture, jobTitle, department, location} = this.state
    let employee = {
      name,
      picture,
      jobTitle,
      department,
      location
    }

    APIs.saveEmployee(employee).then((response)=>{
      //TODO: handle response
      console.log(response);
      // if(){
      //
      // }
    })

  }

  render(){
    return (
      <div className="addMainContainer">
        {this.renderInputs('name')}
        {this.renderInputs('picture')}
        {this.renderInputs('jobTitle')}
        {this.renderInputs('department')}
        {this.renderInputs('location')}
        <div><input className="submitButton" type="submit" value="Submit" onClick={this.onSubmit.bind(this)} /></div>
      </div>
    )
  }
}
