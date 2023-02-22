import './App.css';
import employeeData from './employees.json'
import superheroData from './superheros.json'

function App() {
  console.log(employeeData)
  let myArray = [1,2,3,4,5]
  return (
    <div>
    <p>Hello World</p>
    {
      myArray.map((item,index) => {
        return <p key= {index}>{item}</p>
      })
    }
    {
      employeeData.employees.map((employee,index) => {
        return <p key= {index}>{employee.name}</p>
      })
    }
      {
        superheroData.superheros.map((superheros, index) => {
          return <p key={index}>{superheros.name}</p>
        })
      }
    </div>
  );
}

export default App;

