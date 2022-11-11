const keys = require("../../config/keys")

module.exports = (survey) =>{
    return `
    <html>
        <body>
            <div>
                <h3>Me gustaria saber tú respuesta</h3>
                <p>Por favor responde a la pregunta:</p>
                <p>${survey.body}</p>
                <div><a href="${keys.redirectDomain}api/surveys/${survey.id}/yes">Si</a></div>
                <div><a href="${keys.redirectDomain}api/surveys/${survey.id}/no">No</a></div>
            </div>
        </body>
    </html>
    `
}