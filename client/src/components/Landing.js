import React from "react";
const Landing = () => {
    return(
        <div style={{ textAlign:'center', height:"100vh"}}>
            <h1 className="title-minium">
                Envia encuestas por email a todos tus usuarios y obten una retroalimentación.
            </h1>
            <div className="container-block-1">
                <div className="containter-text">
                    <span className="subtitle">Emaily es una app para poder crear encuestas, enviarlas a todos tus usuarios por correo electronico y obtener una retroalimentacion de su parte.</span>
                    <button className="buttom-google"><a className="link-google" href="/auth/google"><div className="img-google"><img  width={"20px"} src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/google.png?alt=media&token=7063f9b4-5a4b-49b7-a94a-6a76db29898a"></img></div>Sign in with Google</a></button>
                </div>
                <div className="container-img">
                    <img className="landing-mail"src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/mails-landing.jpg?alt=media&token=da96849e-9562-4c79-a72f-8ce46b05233f"></img>
                </div>
            </div>
        </div>
    );
}
export default Landing;