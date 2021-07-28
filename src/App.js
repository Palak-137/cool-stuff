import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Homepage from './components/homepage/homepage'
import Navbar from './constants/navbar/navbar'
import Sidebar from './constants/sidebar/sidebar'
import Task2 from './components/task2/task2'

function App() {
  return (
    <>
    <Router>
      
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <br></br>
     
      <Switch>
        <Route exact path="/task2" component={Task2}></Route>
        <Route exact path="/" component={Homepage}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
