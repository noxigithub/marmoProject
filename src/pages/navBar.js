import React, { useContext } from "react";
import axios from 'axios';
import { LoginContext } from '../helpers/context';
import { Link } from "react-router-dom";


const NavBar = (props) => {

    console.log(props.origin);

    

    const { connected, setConnected } = useContext(LoginContext);

    const handleLogout = async ()=>{
        console.log('clicked');
        const loginData = {
            'type':'logout'           
        };
        try {
            const res = await axios.post("http://localhost/marmoProject/backend/userController.php", loginData);
            if(res.data == "loggedOut"){
                console.log(res.data);

              setConnected(false);
              
              
            }else{
                console.log(res.data);
            }
        } catch (err) {
            console.log('error in the login' + err);
        }
    }


    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand"><Link to={props.origin=="documents"? "/": "#page-top"}>DOCSales</Link></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    { props.origin!=='documents' && <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Documentos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">Acerca de</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Equipo</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
                        
                    </ul>}
                    <ul className="navbar-nav float-rigth">
                            <li className="nav-item">
                                {connected && <a className="nav-link disabled" href="" >Bienvenido</a>}
                            
                            </li>
                            <li> 
                                 {!connected &&<a className="nav-link" ><Link to="/login">iniciar Sesion</Link> </a>}</li>
                            <li> 
                                 {connected &&<a className="nav-link" onClick={handleLogout} >Cerrar Sesion</a>}</li>
                        </ul>
                </div>
            </div>
        </nav>




           
        </div>
    )
}

export default NavBar;