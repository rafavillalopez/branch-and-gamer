import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'

export default function Contact() {
    
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
        <div className='contacto'>
            <br/>
            <div>
                <h6>
                Dirección: Castillo 1332, C1414 CABA <br/>
                Teléfono: 011 2040-1149
                </h6>
                <br/>
                <br/>
                <br/>
                <p>
                "Somos el primer Coding Bootcamp de América Latina. 
                Formamos programadores Fullstack y nos enfocamos en su inserción 
                laboral dentro de la industria tecnológica. La orientación es intensiva 
                y 100% práctica, permitiéndote dar un salto de carrera en tres meses, 
                entrando al mundo de la programación. Cursos online y presenciales."
                </p>
            </div>
            <img className='img-contact'src='https://i.postimg.cc/pL27SDRj/Captura-de-Pantalla-2021-07-02-a-la-s-00-12-19.png' alt='map'/>
        </div>
        </div>
    );
}