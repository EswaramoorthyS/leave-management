import React, { Component } from 'react'
import { apiMethods, apiPaths } from '../common';
import { httpService } from '../servise/httpServise';

export default class Login extends Component {
    state = {
        email: '',
        passwoed: '',
        isError: '',
    }

    login = async () => {
        const { email, password } = this.state;
        if (email !== '' && password !== '') {
            const payload = { email, password };
          
            const url = apiPaths.login;
            httpService(url, apiMethods.post, payload)
                .then(data => {
                    if (data?.error) {
                        this.setState({ isError: data.error })
                    } else {
                        localStorage.setItem('userId', data.id)
                        if (data.role === 'user') {
                            this.props.history.push('/ApplyLeave')
                        } else if (data.role === 'manager') {
                            this.props.history.push('/ApproveLeave')
                        } else {
                            console.log('else')
                        }
                    }
                })
        } else {
            this.setState({ isError: 'Please fill all detail' })
        }
    }
    passfn = (event) => {
        this.setState({ password: event.target.value, isError: '' })
    }
    emailfn = (event) => {
        this.setState({ email: event.target.value, isError: '' })
    }
    render() {
        const { isError } = this.state;
        return (
            <>
                <div className="back">
                    <div style={{
                        marginTop: '40px',
                        textAlign: 'center'
                    }}>
                        <h2>Login</h2>
                        <input placeholder='Email'
                            onChange={(event) => this.emailfn(event)} />
                        <br></br> <br></br>
                        <input placeholder='Password'
                            onChange={(event) => this.passfn(event)} />
                        <br></br> <br></br>
                        {isError.length > 0 && <p style={{ color: 'red' }}>{isError}</p>}

                        <button className="btn" onClick={this.login}>Login</button>
                    </div>
                </div>
            </>
        )

    }
}
