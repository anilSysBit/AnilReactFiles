import React, { Component } from 'react';
import FieldElement from "./FieldElement";
import validate from './Validate';

class FormMainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            maxAge: 80,
            formData: {
                firstName: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'firstName',
                        type: 'text',
                        placeholder: 'Enter First Name Here'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
                lastName: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'lastName',
                        type: 'text',
                        placeholder: 'Enter last Name Here'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
                age: {
                    element: 'select',
                    value: '',
                    config: {
                        name: 'age',
                    },
                    validation: {
                        required: true,
                        minNum: 20
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
                userMessage: {
                    element: 'textarea',
                    value: '',
                    config: {
                        name: 'textArea',
                        placeholder: 'Say something to us'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
            }
        }
    }

    updateForm = (elem) => {
        const newFormData = { ...this.state.formData }
        const newElement = { ...newFormData[elem.id] }
        newElement.value = elem.event.target.value;
        newFormData[elem.id] = newElement;
        this.setState({
            formData: newFormData
        })

        //validation
        let valiateData = validate(newElement);
        newElement.valid = valiateData[0];
        newElement.validationMessage = valiateData[1];

        console.log(newElement);
    }
    submitForm = (e) => {
        e.preventDefault();
        let dataToSubmit = {};
        let addValid = true;
        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }

        for (let key in this.state.formData) {
            addValid = this.state.formData[key].valid && addValid;
        }
        if (addValid) {
            console.log(dataToSubmit);
            setTimeout(() => {
                this.setState({ loading: true })
                this.onSuccess();
            }, [2000])
        } else {
            alert("sorry the form is not valid");
        }

    }
    onSuccess = () => {
        let allStateValue = {
            ...this.state.formData
        }
        for (let key in this.state.formData) {
            allStateValue[key].value = '';
            allStateValue[key].valid = false;
            allStateValue[key].validationMessage = '';
        }
        this.setState({
            formData: allStateValue
        })
        alert("We will Contact You later");
    }
    generateOptions = () => {
        const ageArray = [];
        for (let i = 1; i < this.state.maxAge; i++) {
            ageArray.push(i);
        }

        return ageArray.map((value, index) => (
            <option key={index} value={value}>{value}</option>
        ))
    }
    render() {
        //   console.log(this.state);
        return (
            <>
                <div className="container">
                    <form onSubmit={this.submitForm}>
                        <label>FirstName</label>
                        <FieldElement
                            formData={this.state.formData.firstName}
                            id="firstName"
                            change={(elem) => this.updateForm(elem)}
                        />

                        <label>lastName</label>
                        <FieldElement
                            formData={this.state.formData.lastName}
                            id="lastName"
                            change={(elem) => this.updateForm(elem)}
                        />
                        <label>Select Age</label>
                        <FieldElement
                            formData={this.state.formData.age}
                            id="age"
                            change={(elem) => this.updateForm(elem)}
                        >
                            <option value="">SelectAge</option>
                            {this.generateOptions()}
                        </FieldElement>
                        <label>Message US</label>
                        <FieldElement
                            formData={this.state.formData.userMessage}
                            id="userMessage"
                            change={(elem) => this.updateForm(elem)}
                        />
                        <button type='submit' className='btn btn-warning' disabled={this.state.loading}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default FormMainComponent