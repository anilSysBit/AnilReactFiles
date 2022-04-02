import React from 'react'

const FieldElement = ({ formData, id, change, children }) => {
// This is good thing to be done
// this is the text feild
    const showError = () => {
        let errorMessage = null;
        if (formData.validation && !formData.valid && formData.validationMessage) {
            errorMessage = (
                <div>
                    {formData.validationMessage}
                </div>
            )
        }
        return errorMessage;
    } 

    const renderTemplate = () => {
        let tempTemplate = null;
        switch (formData.element) {
            case 'input':
                tempTemplate = (
                    <>
                        <input
                            {...formData.config}
                            value={formData.value}
                            onChange={(event) => change({ event, id, blur: null })}
                            onBlur={(event) => change({ event, id, blur: true })}
                            className="form-control"
                        />
                        {showError()}
                    </>
                )
                break;

            case 'select':
                tempTemplate = (
                    <>
                        <select
                            {...formData.config}
                            value={formData.value}
                            className="form-control"
                            onChange={(event) => change({ event, id, blur: null })}
                            onBlur={(event) => change({ event, id, blur: true })}
                        >
                            {children}
                        </select>
                        {showError()}
                    </>
                )
                break;

            case 'textarea':
                tempTemplate = (
                    <>
                        <textarea
                            {...formData.config}
                            value={formData.value}
                            onChange={(event) => change({ event, id, blur: null })}
                            onBlur={(event) => change({ event, id, blur: true })}
                            className="form-control"
                        />
                        {showError()}
                    </>
                )
                break;

            default:
                tempTemplate = null;
        }
        return tempTemplate;

    }
    return (
        <>
            {renderTemplate()}
        </>
    )
}

export default FieldElement