import axios from "axios"
import mainConfig from '../mainConfig.js'
let baseUrl = mainConfig.baseUrl

const DEFAULT_TIMEOUT = 30000;

const commonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Origin": "*",
}

class APIs {
  put(url, data = {}) {
    const headers = {
      headers: commonHeaders,
      body: data
    };
    return axios
      .put(url, data, headers)
      .then((response) => {
        if(response && response.data && response.data.result){
          return response.data.data
        }
      })
      .catch(this.exceptionCatcher);
  }
  delete(url) {
    const headers = {
      headers: commonHeaders,
    };
    return axios
      .delete(url, headers)
      .then((response) => {
        if(response && response.data && response.data.result){
          return response.data.data
        }
      })
      .catch(this.exceptionCatcher);
  }
  post(url, data = {}, exceptionHandler = null) {
    const headers = {
      headers: commonHeaders,
      body: data,
      timeout: DEFAULT_TIMEOUT,
    };
    return axios
      .post(url, data, headers)
      .then(response => {
        if(response && response.data && response.data.result){
          return response.data.data
        }
      })
      .catch(this.exceptionCatcher);
  }
  get(url, params) {
    return axios
      .get(url, {
        headers: commonHeaders,
        timeout: DEFAULT_TIMEOUT,
        params
      })
      .then(response => {
        if(response && response.data && response.data.result){
          return response.data.data
        }
      })
      .catch(this.exceptionCatcher);
  }
  exceptionCatcher(e) {
    //TODO: handle exceptions
  }

  listEmployees(){
    let url=`${baseUrl}listEmployees`
    return this.get(url);
  }

  saveEmployee(employee){
    let url=`${baseUrl}addEmployee`
    return this.post(url, employee);
  }

  deleteEmployee(employeeId){
    let url=`${baseUrl}deleteEmployee?id=${employeeId}`
    return this.delete(url);
  }

}

export default new APIs();
