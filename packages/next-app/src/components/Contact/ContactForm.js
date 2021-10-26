import React, { Component, Fragment } from 'react';

//import Amplify, {API} from 'aws-amplify'
//import config from '../../src/aws-exports'
//Amplify.configure(config)


// 1. Need to add some state for the form elements

// 2. Modify the form here to be more relevant to my audience

// 3. Modify this form to also match the expected Hubspot form (which also is to be created)

// 4.

class ContactForm extends Component {

    state = {
        contactForm: {
            firstname: {
                value: '',
                valid: false,
                validation: {
                    required: false
                },
            },
            lastname: {
                value: '',
                valid: false,
                validation: {
                    required: false
                },
            },
            company: {
                value: '',
                valid: false,
                validation: {
                    required: false
                },
            },
            message: {
                value: '',
                valid: false,
                validation: {
                    required: false
                },
            },
            interest: {
                value: '',
                valid: false,
                validation: {
                    required: false
                },
            },
            email: {
                value: '',
                valid: false,
                validation: {
                    required: true,
                    isEmail: true
                },
            },
            phone: {
                value: '',
                valid: false,
                validation: {
                    required: true,
                    isNumeric: true
                },
            },
        },
    };

    subCF() {
//        const data = await API.get('subnlapi','/subnl')
        let myInit = {
          body: {
            ...this.state.contactForm
          }
        };
console.log("Call Contact Form API: ", myInit)
        // API.post('HbsptSubCntctFrm','/hbsptsubcntctfrm', myInit)
        //     .then(response => {
        //         console.log("THis is success in ContactForm: ", response)
        //         //Reset form
        //         this.resetForm();
        //     })
        //     .catch(error => {
        //         console.log("THis is error")
        //         console.log(error)
        //     });

    }

    resetForm = () => {
        const updatedContactForm = {
                firstname: {
                    value: '',
                    valid: false,
                    validation: {
                        required: false
                    },
                },
                lastname: {
                    value: '',
                    valid: false,
                    validation: {
                        required: false
                    },
                },
                company: {
                    value: '',
                    valid: false,
                    validation: {
                        required: false
                    },
                },
                message: {
                    value: '',
                    valid: false,
                    validation: {
                        required: false
                    },
                },
                interest: {
                    value: '',
                    valid: false,
                    validation: {
                        required: false
                    },
                },
                email: {
                    value: '',
                    valid: false,
                    validation: {
                        required: true,
                        isEmail: true
                    },
                },
                phone: {
                    value: '',
                    valid: false,
                    validation: {
                        required: true,
                        isNumeric: true
                    },
                }
        };

        let formIsValid = true;
        this.setState({contactForm: updatedContactForm, formIsValid: formIsValid});
    }

    contactHandler = (event) => {
        //Send contact info away
        console.log("This is from contactHandler");

        //prevent form from submitting
        event.preventDefault();

        this.subCF();

    }

    checkValidity(value, rules) {

        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedContactForm = {
            ...this.state.contactForm
        };
        const updatedFormElement = {
            ...updatedContactForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

        //updatedFormElement.touched = true;
        updatedContactForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedContactForm) {
            formIsValid = updatedContactForm [inputIdentifier].valid && formIsValid;
        }
        this.setState({contactForm: updatedContactForm, formIsValid: formIsValid});
    }

    render() {
        return (
            <React.Fragment>
                <h2>Get In Touch</h2>

                <form id="contactForm">
                    <div className="container flex">

                        <div className="shadow-inner ">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" name="firstname" id="firstname" className="form-control"
                                           placeholder="First Name"
                                           onChange={(event) => this.inputChangeHandler(event, 'firstname')}
                                           value={this.state.contactForm.firstname.value}
                                           required />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" name="lastname" id="lastname" className="form-control" placeholder="Last Name"
                                           onChange={(event) => this.inputChangeHandler(event, 'lastname')}
                                           value={this.state.contactForm.lastname.value}
                                           required />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" name="company" id="company" className="form-control" placeholder="Company Name"
                                           onChange={(event) => this.inputChangeHandler(event, 'company')}
                                           value={this.state.contactForm.company.value}
                                           required />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="email"  
                                    name="email" id="email" className="form-control" placeholder="Your Email"
                                           onChange={(event) => this.inputChangeHandler(event, 'email')}
                                           value={this.state.contactForm.email.value}
                                           required />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone"
                                           onChange={(event) => this.inputChangeHandler(event, 'phone')}
                                           value={this.state.contactForm.phone.value}
                                           required />
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" rows="8" placeholder="Your Message"
                                              onChange={(event) => this.inputChangeHandler(event, 'message')}
                                              value={this.state.contactForm.message.value}
                                              required></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <button onClick={(event) => this.contactHandler(event)} type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default ContactForm;