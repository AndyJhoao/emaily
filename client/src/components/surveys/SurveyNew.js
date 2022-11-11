import React, { Component } from "react";
import { reduxForm } from "redux-form"
import SurveyForm from "./SurveyForm";
import SurveyReview from "./SurveyFormReview";

class SurveyNew extends Component {
    state = {showFormReview : false}

    renderComponent(){
        if(this.state.showFormReview === true){
            return <SurveyReview onCancel={()=>this.setState({ showFormReview: false})}></SurveyReview>
        }
        return <SurveyForm onSurveySubmit={()=>this.setState({ showFormReview: true })}></SurveyForm>
    }
    render(){
        return(
            <div>
                {this.renderComponent()}
            </div>
        );
    }
    
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);