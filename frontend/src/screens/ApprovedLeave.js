import React, { Component } from 'react'

import { apiMethods, apiPaths } from '../common';
import { httpService } from '../servise/httpServise';

export default class ApprovedLeave extends Component {

    state = {
        approvedLeaves: '',
    }
    componentDidMount() {
        this.showLeave();
    }
    showLeave = () => {

        var userId = localStorage.getItem('userId');

        const payload = { id: userId };
       
        const url = apiPaths.approvedLeave;
        httpService(url, apiMethods.post, payload)
            .then(data => {
                this.setState({ approvedLeaves: data })
            })
    }
    render() {
        const { approvedLeaves } = this.state;
        return (
            <>
                <div className="back">
                    <p>Manager applied/approved leaves list</p>
                    {approvedLeaves.length > 0 &&
                        <div>
                            {approvedLeaves.map((leave, i) => (
                                <div style={{ padding: '10px' }} key={i}>
                                    <li style={{ padding: '10px' }}>{leave.startDate} - - {leave.endDate}---
                                        {leave.reason} --
                                        {leave.approvel ? "Approved" : "Not Approvd"}
                                    </li>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </>
        )
    }
}
