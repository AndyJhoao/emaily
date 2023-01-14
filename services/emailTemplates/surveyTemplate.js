const keys = require("../../config/keys")

module.exports = (survey) =>{
    return `
    <html>
        <body style="display: flex; flex-direction: column; justify-content: center; align-items: center; ">
            <div style="width: 500px; height: auto; background-color: rgba(240, 232, 223, 1); border-radius: 2%;">
                <div style="width: 500px; height: 200px; border-radius: 2%;">
                    <img width="500px" height="200px" style="border-radius: 2%;" src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/logo-emaily-mail.png?alt=media&token=cbc899f1-0a6a-49fd-8a25-0be11ab878dd" alt="cover"></div>
                    <div style="width: auto; height: auto; display:flex; flex-direction: column; align-items: center; justify-content: center;">
                        <h3 style="margin-top: -30px;">Emaily</h3>  
                        <div style="width: 100%; display: flex; justify-content: left; margin-left: 80px;">
                            <h4 style="margin: 0;">${survey.subject}</h4>
                        </div>   
                        <p style="text-align: justify; padding: 20px 40px">${survey.body}</p>
                    </div>
                <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-around; color: black; padding-bottom: 30px;">
                    <a style="text-decoration: none; color: black; padding: 10px; font-weight: bold;" href="${keys.redirectDomain}api/surveys/${survey.id}/yes">Si</a>
                    <a style="text-decoration: none; color: black; padding: 10px; font-weight: bold;" href="${keys.redirectDomain}api/surveys/${survey.id}/no">No</a>
                </div>
                <footer style="background-color: rgb(228, 221, 213); padding-top: 20px;">
                    <div style="display: flex; justify-content: center">
                        <a style="margin: 5px;" target="_blank" href="https://www.facebook.com/andyjhoao.hm/"><img src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/icons8-facebook-60.svg?alt=media&token=34bb2dfb-9a36-43a0-a9b5-a21d018191b5" alt="facebook"></a>
                        <a style="margin: 5px;" target="_blank" href="https://www.instagram.com/_andyjhoao/"><img src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/icons8-instagram-circle.svg?alt=media&token=211c4d9e-6e71-48ef-b581-dd52458b28c8" alt="instagram"></a>
                        <a style="margin: 5px;" target="_blank" href="https://www.linkedin.com/in/andyjhoao/"><img src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/icons8-linkedin-circled.svg?alt=media&token=f7d63043-3126-4317-aa68-6626b698d369" alt="linkedin"></a>
                        <a style="margin: 5px;" target="_blank" href="https://github.com/AndyJhoao"><img src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/icons8-github.svg?alt=media&token=33f2a0c6-c6c9-4d40-85bf-d25391283c29" alt="github"></a>
                    </div>
                    
                    <div style="display: flex; width: 100%; flex-direction: column; align-items: center; justify-content: center;">
                        <p>Este es un correo de notificación de servicio</p>
                        <p> © 2023 Andy Jhoao. Todos los derechos reservados</p>
                    </div>
                </footer>

                
            </div>
        </body>
    </html>
    `
}