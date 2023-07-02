import './App.css'
import Navigation from './Nav.js'
import './LogInForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInForm from './LogInForm'

function App() {
  return (
  <div className="App">
     <Navigation></Navigation>
     <LogInForm></LogInForm>
  </div>
  )
}

export default App
