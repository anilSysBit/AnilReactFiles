import React, { Component } from 'react'
import FormField from './utils/FormField';
import validate from "./utils/HandleError";

class StateControlForm extends Component {
    state ={
        loading:false,
        formData:{
            name:{
                element:'input',
                value:'',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter Your Name'
                },
                
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            }
        }
    }

    updateForm = (element) =>{
        const newFormData = {...this.state.formData}
        const newElement = {...newFormData[element.id]}
        newElement.value = element.event.target.value;

        newFormData[element.id] = newElement;
        this.setState({ 
            formData:newFormData
        })

        // validation
        let validateData= validate(newElement);
        newElement.valid = validateData[0];
        newElement.validationMessage  = validateData[1];
    }
  render() {
    return (
      <>
        <div className="container">
            <form>
                <div className="from-group">
                    <label htmlFor="">Name</label>
                    <FormField 
                    formData = {this.state.formData.name}
                    change = {(element)=> this.updateForm(element)}
                    id="name"
                    />
                </div>
            </form>
        </div>
      </>
    )
  }
}

 
export default StateControlForm