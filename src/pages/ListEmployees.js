import React, {Component} from 'react'
import APIs from './../Utilities/APIs'
import mainConfig from './../mainConfig'

const deleteUrl = 'https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/82-512.png'
const editUrl = 'https://www.flaticon.com/svg/static/icons/svg/32/32355.svg'

export default class ListEmployees extends Component {
  state = {
    allEmployees : []
  }

  componentDidMount() {
    this.refreshList()
  }

  refreshList(){
    APIs.listEmployees().then((allEmployees)=>{
      this.setState({allEmployees: allEmployees})
    })
  }

  deleteEmployee(employeeId) {
    APIs.deleteEmployee(employeeId).then(()=>{
      this.refreshList()
    })
  }

  editEmployee(employeeId) {
    window.open(`${mainConfig.websiteUrl}addEmployee?id=${employeeId}`)
  }

  renderRows(each, index){
    return (
      <div key={index} className="eachRow">
        <img className="image" alt={each.name} src={each.picture}/>
        <img className="delete" alt={each.name} src={deleteUrl} onClick={()=>this.deleteEmployee(each._id)}/>
        <img className="edit" alt={each.name} src={editUrl} onClick={()=>this.editEmployee(each._id)}/>
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
