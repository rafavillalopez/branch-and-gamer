import * as React from "react";
import Navbar from './Navbar'
import { Link } from "react-router-dom";


export default function About() {
    
    return (
        <div >
            <Navbar />
            <br/>
          <Link
            to="/"
            className="goback"
            style={{ textDecoration: "none" , paddingBottom: '8px'}}
          >
            Volver
          </Link>
            <div className='about'>
                <p>
                    <h5>Somos cinco estudiantes de Plataforma 5, que dedicamos 200 horas a la creación de este sitio.</h5>
                    <br/>
                    <br/>
                    <ul> <h5>Nosotros:</h5>
                    <br/>
                        <li>Alejandro Zuñiga</li>
                        <li>Ivan Cardoso</li>
                        <li>Guillermo Sotelo</li>
                        <li>Rafael Villa</li>
                        <li>Tomás Vallejos</li>
                    </ul>
                </p>
             </div>
        </div>
    );
}


