import _ from "lodash"
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions"
import { withRouter } from "react-router-dom";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) =>{
    const reviewFields = _.map(formFields,({ label, name})=>{
        return(
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })
    return(
        <div>
            <h5>Por favor confirmar su informacion ingresada.</h5>
            {reviewFields}
            <button className="yellow darken-3 btn flat" onClick={onCancel}>Regresar</button>
            <button className="green right btn flat white-text" onClick={()=>submitSurvey(formValues,history)}>Enviar<i className="material-icons right">email</i></button>
        </div>
    );
}
function mapStateToProps(state){
    return{
        formValues : state.form.surveyForm.values
    }
}

export default connect(mapStateToProps,actions)(withRouter(SurveyReview));