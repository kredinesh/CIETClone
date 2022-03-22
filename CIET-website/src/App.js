import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import Department from './Component/Department';
import AddFaculty from './Component/AddFaculty';
import EditFaculty from './Component/EditFaculty';
import Home from './Component/Home';
import Faculty from './Component/Faculty';
import Location from './Component/Location';
import CIET from './Image component/ciet_logo.jpg'
import CSE from './Component/Dept_faculties/CSE';
import CIVIL from './Component/Dept_faculties/CIVIL';
import MECH from './Component/Dept_faculties/MECH';
import IT from './Component/Dept_faculties/IT';


function App() 
{
  return (
    <div className="New">
      <h1 align="center">COIMBATORE INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1><br/>
      <h2 align="center">Thondamuthur(via),Narasipuram, Coimbatore -641 109</h2><br/>

      { <div className="wrapper">
        <header>
          <nav className="navbar navbar-expand-sm navbar-light"> <a href="" className="navbar-brand">
            <img src={CIET} width="130px" alt="Ciet logo"></img> </a>
            <button className="navbar-toggler" type="button" data-toggle="dropdown" data-target="#MynavBar"><span className="navbar-toggler-icon"></span></button>
          
          {/*  Using Navigation  codes  */}
          {/* {/
            <div className="collapse navbar-collapse" id="MynavBar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href='/home' className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href='/faculty' className="nav-link">Faculty</a>
                </li>
                <li className="nav-item">
                  <a href='/department' className="nav-link">Department</a>
                </li>
              </ul> }

            </div> }
{/ */}

          </nav>
        </header>
      </div>  }
      <BrowserRouter>
        <div exact align="center" >
          <Link to ="home">Home</Link> | <Link to="location">Location</Link> | <Link to="faculty">Faculty</Link>  |   <Link to="department">Department</Link><hr />
        </div>
        <div >
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/cse" component={CSE}></Route>
            <Route path="/civil" component={CIVIL}></Route>
            <Route path="/mech" component={MECH}></Route>
            <Route path="/it" component={IT}></Route>
            <Route path="/location" component={Location}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/faculty" component={Faculty}></Route>
            <Route path="/add-faculty" component={AddFaculty}></Route>
            <Route path="/department" component={Department}></Route>
            <Route path="/edit-faculty" component={EditFaculty}></Route>
          </Switch>
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
