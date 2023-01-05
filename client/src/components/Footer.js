import React from "react";
// import { useState } from "react";
// import ButtonBurger from "./buttons/ButtonBurger";


const Footer = () => {
    // const [clicked,isClicked] = useState(false);
    // const handleClick = () =>{
    //     console.log(clicked);
    //     isClicked(!clicked);
    // }
    return (
        <div>
            <footer className="container-block-footer">
                <div>
                    <p>© 2023 </p>
                    <span> Desarrollador : <a target={"_blank"} href="https://www.linkedin.com/in/andyjhoao/">Andy Jhoao</a></span>
                </div>
                {/* <div>
                    Ver más
                    <ButtonBurger clicked={clicked} handleClick={handleClick}></ButtonBurger>
                </div> */}
                {/* <span>Ilustaciones con derechos de autor: </span>
                <a href="https://www.flaticon.com/free-icons/google" title="google icons">Google icons created by Freepik - Flaticon</a>
                <a href="https://www.freepik.es/vector-gratis/ilustracion-personaje-personas-iconos-mensaje-internet_3585192.htm#query=ilustracion%20web%20mail&position=10&from_view=search&track=ais">Imagen de rawpixel.com  en Freepik</a> */}
            </footer>
        </div>
    );
}

export default Footer;
