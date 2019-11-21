import React from "react";
import {BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";
import Login from './components/pages/Login';
import Perfil from './components/pages/Perfil';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import PerfilAlumno from './components/pages/PerfilAlumno';
import PerfilProfesor from './components/pages/PerfilProfesor';
import Ratings from './components/pages/Ratings';
import Cursos from './components/pages/Cursos';
import Comments from './components/pages/Comments';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {

  return (
    <Router>
    
      <div>
      <nav className="navbar navbar-dark bg-dark">
        <ul>
          <a className ="navbar-brand" href="/">
          <img src="https://wiki.ead.pucv.cl/images/9/9a/Logo_unabgrande.png" width="40" height="37" class="d-inline-block align-top" alt=""/>
          Unab Virtual
          </a>
            
            <Link to="/perfil"> Perfil </Link>
            <Link to="/registro"> Registrarse </Link>
            <Link to="/inicio-sesion"> Iniciar Sesión </Link>
    
        </ul>
      </nav>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
          
            <Home />
          </Route>

          <Route path="/perfil">
          
            <Perfil />
            
          </Route>

          <Route path="/registro">
            <Register />
          </Route>

          <Route path="/inicio-sesion">
            <Login />
          </Route>

          <Route path="/perfil-alumno">
            <PerfilAlumno />
          </Route>

          <Route path="/perfil-profesor">
            <PerfilProfesor/>
          </Route>

          <Route path="/ratings">
            <Ratings/>
          </Route>
          
          <Route path="/cursos">
            <Cursos/>
          </Route>

          <Route path="/comments">
            <Comments/>
          </Route>

        </Switch>

      </div>
    </Router>
  );
  
}

// You can think of these components as "pages"
// in your app.


