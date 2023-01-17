const keys = require("../../config/keys")

module.exports = (survey) =>{
    return `
    <!DOCTYPE html>
<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mail Template</title>
        </head>
        <body style="width: auto; height: auto; display: table;">
            <div style="width: 500px; height: auto; background-color: rgba(240, 232, 223, 1); border-radius: 2%; display: table;">
                <div style=" height: 200px; border-radius: 2%; display: table-row;">
                    <img width="500px" height="200px" style="border-radius: 2%;" src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/logo-emaily-mail.png?alt=media&token=cbc899f1-0a6a-49fd-8a25-0be11ab878dd" alt="cover"></div>
                    <div style="width: 100%; height: auto; display: table;">
                        <div style="width: 100%;">
                            <h3 style="text-align: center; margin-top: -10px;">Emaily</h3>  
                        </div>
                        <div style="width: 100%; padding-left: 40px; padding-top: 10px;">
                            <h4 style="margin: 0;">${survey.subject}</h4>
                        </div>   
                        <p style="text-align: justify; padding: 20px 40px; word-break: break-all;">${survey.body}</p>
                    </div>
                <div style="display: table; width: 100%;  color: black; padding-bottom: 30px;">
                    <a style="display: table-cell; text-align: center; vertical-align: middle; text-decoration: none; color: black; padding: 10px; font-weight: bold;" href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Si</a>
                    <a style="display: table-cell; text-align: center; vertical-align: middle; text-decoration: none; color: black; padding: 10px; font-weight: bold;" href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                </div>
                <footer style="background-color: rgb(228, 221, 213); padding-top: 20px; width: 100%; height: auto;">
                    <div style="display: table;  width: 100%;">
                        <a style="display: table-cell; text-align: center; vertical-align: middle; margin: 5px;" target="_blank" href="https://www.facebook.com/andyjhoao.hm/"><img width="60px" height="60px" data-imagetype="External" style="border-radius: 1%;" src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/icons8-facebook-60.svg?alt=media&token=34bb2dfb-9a36-43a0-a9b5-a21d018191b5" alt="facebook" /></a>
                        <a style="display: table-cell; text-align: center; vertical-align: middle; margin: 5px;" target="_blank" href="https://www.instagram.com/_andyjhoao/"><img width="60px" height="60px" style="border-radius: 1%;" src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/icons8-instagram-circle.svg?alt=media&token=211c4d9e-6e71-48ef-b581-dd52458b28c8" alt="instagram" /></a>
                        <a style="display: table-cell; text-align: center; vertical-align: middle; margin: 5px;" target="_blank" href="https://www.linkedin.com/in/andyjhoao/"><img width="60px" height="60px" style="border-radius: 1%;" src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/icons8-linkedin-circled.svg?alt=media&token=f7d63043-3126-4317-aa68-6626b698d369" alt="linkedin" /></a>
                        <a style="display: table-cell; text-align: center; vertical-align: middle; margin: 5px;" target="_blank" href="https://github.com/AndyJhoao"><img width="60px" height="60px" style="border-radius: 1%;" src="https://firebasestorage.googleapis.com/v0/b/emaily-956d8.appspot.com/o/icons8-github.svg?alt=media&token=33f2a0c6-c6c9-4d40-85bf-d25391283c29" alt="github" /></a>
                    </div>
                    
                    <div style="display: table; width: 100%; padding: 10px 0px;">
                        <p style="display: table-row; text-align: center; vertical-align: middle;  width: 100%;">Este es un correo de notificación de servicio</p>
                        <p style="display: table-row; text-align: center; vertical-align: middle;  width: 100%;"> © 2023 Andy Jhoao. Todos los derechos reservados</p>
                    </div>
                </footer>

                
            </div>
        </body>
    </html>
    `
}