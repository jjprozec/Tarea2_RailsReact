import React, { Component } from 'react';


class Perfil extends Component{
  render() {
    return(
        <div className="vh-100 vw-100 backWelcome">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="card">
                       
                        <div className="card-body">
                            <h3 className="card-title">Ingresar como Alumno</h3>
                            <p className="card-text">
                            Perfil Alumno donde pueden ver sus cursos inscritos.
                                
                            </p>
                            <a href="/perfil-alumno" className="btn btn-secondary" >Ingresar</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Ingresar como Profesor</h3>
                            <p className="card-text">
                                Perfil Profesor donde pueden ver sus cursos y valoraciones de sus estudiantes.
                            </p>
                            <a href="/perfil-profesor" className="btn btn-secondary" >Ingresar</a>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}
}
export default Perfil;