import './App.css'
import Table from './Components/Table'
import DynamicStyle from "./Components/DynamicStyle"
import StyleExample from './Components/ExampleStyle2'
import Form from './Form/Form'
import Navbar from './Landing Page/Components/Navbar'
import Hero from './Landing Page/Components/Hero'
import Example from './Components/ReactLifeCycle'
import Memo from './Components/Memo'
import MyRef from './Components/Ref'
import ErrorBoundary from './Error Message/ErrorBoundary'
import BuggyComponent from './Error Message/BuggyComponent'
import MyComponent from './Components/HigherOrderComponent'
import ThemeProvider from './Components/Context/Provider'
ThemeProvider
import ThemeToggler from './Components/Context/Consume'

function App() {

  return (
    <>
     {/* <Table /> */}
    {/* <DynamicStyle /> */}
    {/* <StyleExample /> */}
    {/* <Form /> */}
    {/* <Navbar />
    <Hero />

    <Example  color="Yellow"/>
    <Memo /> */}
    {/* <MyRef />

    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary> */}
    {/* <MyComponent /> */}
<ThemeProvider>
<ThemeToggler />

</ThemeProvider>
        
    </>
  )
}

export default App
