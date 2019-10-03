import React from 'react';


class Contact extends React.Component {
    initialErrors = { // to be able to reset errors
        name: '',
        email: '',
    }

    state = { // initial state, empty strings
        formSuccess: false,
        fields: {
            name: "",
            email: "",
            comment: "",
        },
        errors: {
            name: '',
            email: '',
        }
    }

    handleChange = (e) => { //runs when name/email/comment typed in
        const value = e.target.value //value inserted
        const fieldName = e.target.name; //which field

        let newFields = this.state.fields;
        newFields[fieldName] = value; //function runs for all inputs, have to able to dynamically set values
        
        this.setState({
            fields: newFields
        });
    }

    validateEmail = (email) => {
         //pattern that validates email inputted
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    submitForm = (e) => {
        e.preventDefault();  //stop page reload 
        
        let hadError = false;
        const currentErrors = this.state.errors
        if (this.state.fields.name === "") {
            currentErrors.name = 'Please provide a name!';
            hadError = true;
        } else {
            currentErrors.name = ''; //resets error
        }

        if (this.state.fields.email === "" || !this.validateEmail(this.state.fields.email)) {
            currentErrors.email = 'Please provide a valid email!';
            hadError = true;
        } else {
            currentErrors.email = ''; //resets error 
        }

        this.setState({
            errors: currentErrors //updates value of errors, clears errors if they were fixed
        });
            
        if (!hadError) {
            this.setState({
                formSuccess: true,
            });
        }
    }

    render(){
        return(
            <div className="main-content sparkle">
            <div className="form">  
                <form onSubmit={this.submitForm}>
                    <fieldset className="form-group">
                        <label className="srs-only">name*</label>
                        { (this.state.errors.name !== '') ? //if there is an error then show message 
                            <p className="srs-only" style={{ color: 'red' }}>{this.state.errors.name}</p>
                            :
                            null
                        }
                        <input type="text" className="form-control has-error" name="name" placeholder="your name" onChange={this.handleChange} value={this.state.fields.name} /> 
                    </fieldset>
                    <fieldset className="form-group has-error">
                        <label className="srs-only">email*</label>
                        { (this.state.errors.email !== '') ?
                            <p className="srs-only" style={{ color: 'red' }}>{this.state.errors.email}</p>
                            :
                            null
                        }
                        <input type="text" className="form-control" name="email" placeholder="your email" onChange={this.handleChange} value={this.state.fields.email} />
                    </fieldset>
                    <fieldset className="form-group">
                        <label className="srs-only">comments/questions</label>
                        <textarea className="form-control" name="comment" placeholder="your comment..." onChange={this.handleChange} value={this.state.fields.comment}></textarea>
                    </fieldset>
                    <button  type="submit" className="btn btn-outline-info">submit</button>
                    { this.state.formSuccess ? <p className="form-success">Form successfully submitted! Thank you.</p> : null}
                </form>
            </div>
        </div>
        );
    }
}


export default Contact;
