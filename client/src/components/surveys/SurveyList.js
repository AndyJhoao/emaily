import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys,fetchUser,deleteSurvey } from "../../actions";
import { useState } from "react";


class SurveyList extends Component {
    
    componentDidMount(){
        this.props.fetchSurveys();
    }
    renderSurveys(){
        return this.props.surveys.reverse().map(survey => {
            return(
                <div className="card" style={{ margin: "20px 30px",background:"#D2DAFF" }} key={survey._id}>
                    <div className="card-content">
                        <div className="right"><button onClick={()=>this.props.deleteSurvey(survey._id)} className="red btn flat"><i className="material-icons rigth">delete</i></button></div>
                        <span className="card-title"><label style={{fontSize:"1em",color:"#967E76"}}><i><b>Titulo: </b></i></label>{survey.title}</span>
                        <p><label style={{fontSize:"1em",color:"#967E76"}}><i><b>Cuerpo: </b></i></label>{ survey.body }</p>
                        <p className="right "><label style={{fontSize:"1em",color:"#967E76"}}><i>Fecha de creación: </i></label>{ new Date(survey.dateSent).toLocaleDateString() }</p>
                    </div>
                    <div className="card-action">
                        <a style={{ color:"black"}}><label style={{fontSize:"1em",color:"#967E76"}}><i><b>Si: </b></i></label>{ survey.yes }</a>
                        <a style={{ color:"black"}}><label style={{fontSize:"1em",color:"#967E76"}}><i><b>No: </b></i></label>{ survey.no }</a>
                        
                    </div>
                   
                </div>
            );
        })
    }
    render(){
        return(
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}
function mapStateToProps({ surveys,user }){
    return { surveys,user }
}

export default connect(mapStateToProps,{fetchSurveys,fetchUser,deleteSurvey})(SurveyList);