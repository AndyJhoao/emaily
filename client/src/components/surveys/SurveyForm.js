import _ from "lodash"
import React, { Component } from "react";
import { Link } from "react-router-dom"
import { reduxForm , Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

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
                    <Link to="/surveys" className="red btn-flat left white-text">Cancel<i className="material-icons right">keyboard_return</i></Link>
                    <button type="submit" className="teal btn-flat right white-text">Next   <i className="material-icons right">done</i></button>
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
    errors.recipients = validateEmails(values.recipients|| '');

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount:false
})(SurveyForm);