import './App.css';
import { Component } from "react"

class App extends Component {
  constructor() {
    super();

    this.state = { employees: [] };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=12&nat=no")
      .then(response => response.json() )
      .then(employees => this.setState({ employees: employees.results }))
  
  }

  render() {
    console.log(this.state.employees)
    return (
      <div className="App">
        <h1>Meet our employees</h1>
        <div className="employee-list"> 
          { this.state.employees.map( employee => 
            <article className="employee-card" key={employee.id.value}>
              <img src={employee.picture.large} alt="{employee.name.first}"  />
              <div>
                <h2> {employee.name.first} {employee.name.last} ({employee.dob.age}) </h2>
                <p>Phone: {employee.phone}</p>
                <p>Email: {employee.email}</p>
                <p>Address: <br />
                  {employee.location.street.name} {employee.location.street.number}, <br />
                  {employee.location.postcode} {employee.location.city}</p>
              </div>
            </article>
            )
          }
        </div>
      </div>
    );   
  } 

}


export default App;
