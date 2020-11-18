import React, {Component} from 'react'
import APIs from './../Utilities/APIs'

export default class AddEmployee extends Component {
  state = {
    name : '',
    picture : '',
    jobTitle : '',
    department : '',
    location : '',
    isInEditMode: false,
    currentId: ''
  }

  componentDidMount(){
    let isInEditMode = false
    if(window.location.href && window.location.href.includes('id=')){
      let currentId = window.location.href.split('id=')[1]
      this.setState({
        isInEditMode: true,
        currentId: currentId
      })

      APIs.getEmployee(currentId).then((response)=>{
        this.setState({
          name : response.name,
          picture : response.picture,
          jobTitle : response.jobTitle,
          department : response.department,
          location : response.location,
        })
      })
    }
  }

  handleChange(event, field) {
    this.setState({[field]: event.target.value});
  }

  renderInputs(field){
    return(<div><input className="inputFields" value={this.state[field]} onChange={(e)=>this.handleChange(e, field)} placeholder={`${field} ...`} /></div>)
  }

  onSubmit(){
    let {name, picture, jobTitle, department, location, currentId} = this.state
    let employee = {
      id: currentId,
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
    let {isInEditMode} = this.state
    return (
      <div className="addMainContainer">
        {this.renderInputs('name')}
        {this.renderInputs('picture')}
        {this.renderInputs('jobTitle')}
        {this.renderInputs('department')}
        {this.renderInputs('location')}
        <div><input className="submitButton" type="submit" value={isInEditMode?'Update':'Add new'} onClick={this.onSubmit.bind(this)} /></div>
      </div>
    )
  }
}
