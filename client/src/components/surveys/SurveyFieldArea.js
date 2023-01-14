import React from "react";

export default ({input,label,meta:{error,touched}})=>{
    return(
        <div style={{margin:"20px 20px"}}>
            <label>{label}</label>
            <textarea {...input} style={{marginBottom:'5px'}}></textarea>
            <div className="red-text" style={{marginBotttom:'20px'}}>{touched && error}</div>
        </div>
    );
}