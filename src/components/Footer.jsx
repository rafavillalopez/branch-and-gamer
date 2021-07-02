import * as React from "react";
import { Link } from 'react-router-dom'

export default function Footer() {

    return(
        <div className='footer'>
            <Link className='contacto' to='/about'>
                Sobre nosotros
            </Link>
            <p>
                Branch&Gamer fué creado por estudiantes de Plataforma 5 Argentina © 2021
            </p>
            <Link className='contacto' to='/contact'>
                Contacto
            </Link>
        </div>
    )
}