import React, { Component } from 'react'
import { apiMethods, apiPaths } from '../common';
import { httpService } from '../servise/httpServise';

export default class Register extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        isError: '',
    }
    register = async () => {

        const { name, email, password } = this.state;
        if (email !== '' && password !== '') {
            const payload = { name, email, password };
           
            const url = apiPaths.register;
            httpService(url, apiMethods.post, payload)
                .then(data => {
                    if (data.success) {
                        this.props.history.push('/Login')
                    }
                })
        } else {
            this.setState({ isError: 'Please fill all detail' })
        }
    }
    namefn = (event) => {
        this.setState({ name: event.target.value, isError: '' })
    }
    emailfn = (event) => {
        this.setState({ email: event.target.value, isError: '' })
    }
    passfn = (event) => {
        this.setState({ password: event.target.value, isError: '' })
    }
    render() {
        const { isError } = this.state;
        return (
            <>
                <div className="back">
                    <div style={{ marginTop: '5px', textAlign: 'center' }}>

                        <h2>Register</h2>

                        <input placeholder='Name'
                            onChange={(event) => this.namefn(event)} />
                        <br></br><br></br>
                        <input placeholder='Email'
                            onChange={(event) => this.emailfn(event)} />
                        <br></br><br></br>
                        <input placeholder='Password'
                            onChange={(event) => this.passfn(event)} />
                        <br></br><br></br>
                        {isError.length > 0 && <p style={{ color: 'red' }}>{isError}</p>}
                        <button className="btn" onClick={this.register}>submit</button>
                    </div>
                </div>
            </>
        )
    }
}
