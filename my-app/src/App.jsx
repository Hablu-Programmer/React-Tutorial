
import 'bootstrap/dist/css/bootstrap.min.css';
'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyEvent from "./components/Eventhandler"
import Login from "./components/Login/Login"
import Parents from "./components/Parent"
import StudentInfo from "./components/StudentInfo"
import StudentData from "./components/Studentdata.json"
import UniqueID from "./components/UniqueID"
import MyList from "./components/User/MyList"
import MyNavbar from './components/Navbar/Navbar';
import MyForm from './components/Form/Form';
function App() {

  // console.log(StudentData)
  return (
    <>

    {/* <UniqueID />

    {StudentData.map((data)=> (
       <StudentInfo username={data.username} number={data.number} Address={data.Address} Role={data.Role} />
  
    ))}
 */}

{/* <MyEvent /> 

 <Parents /> */}

{/* <Login /> */}

{/* <MyList /> */}

<MyNavbar />

<MyForm /> 
    </>
  )
}

export default App
