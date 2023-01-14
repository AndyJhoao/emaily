import _ from "lodash"
import React, { Component } from "react";
import { Link } from "react-router-dom"
import { reduxForm , Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";
import SurveyFieldArea from "./SurveyFieldArea";

class SurveyForm extends Component {
    renderField(){
        return(
            _.map(formFields,({label,name})=>{
                return <Field key={name} component={SurveyField} type="text" label={label} name={name}></Field>
            })
        )
    }
    render() {
        return(
            <div className="">
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderField()}
                    <Field component={SurveyFieldArea} type="text" label={"Cuerpo"} name={"body"}></Field>
                    <Link style={{marginTop:"20px"}} to="/surveys" className="red btn-flat left white-text space-buttons">Cancel<i className="material-icons right">keyboard_return</i></Link>
                    <button style={{marginTop:"20px"}} type="submit" className="teal btn-flat right white-text space-buttons">Next   <i className="material-icons right">done</i></button>
                </form>
            </div>
        );
    }
}
function validate(values){
    const errors ={};

    _.each(formFields,({name})=>{
        if(!values[name]){
            errors[name] = 'Debes de ingresar un valor'
        }
    });
    

    console.log(SurveyFieldArea);


    errors.recipients = validateEmails(values.recipients|| '');

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount:false
})(SurveyForm);