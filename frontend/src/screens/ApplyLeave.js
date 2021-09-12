import React, { Component } from 'react'

import { apiMethods, apiPaths } from '../common';
import { httpService } from '../servise/httpServise';
export default class ApplyLeave extends Component {

  state = {
    startDate: '',
    endDate: '',
    reason: '',
    approvedLeaves: '',
  }

  apply = async () => {
    var userId = localStorage.getItem('userId');

    const { startDate, endDate, reason } = this.state;
    const payload = { userId, startDate, endDate, reason };

    const url = apiPaths.applyleave;
    httpService(url, apiMethods.post, payload)
      .then(data => {
        if (data?.error) {
          this.setState({ isError: data.error })
        } else {
          this.props.history.push('/ApprovedLeave')
        }
      })
  }
  showLeave = () => {
    this.props.history.push('/ApprovedLeave')
  }

  startfn = (event) => {
    this.setState({ startDate: event.target.value, isError: '' })
  }
  endfn = (event) => {
    this.setState({ endDate: event.target.value, isError: '' })
  }
  reasonfn = (event) => {
    this.setState({ reason: event.target.value, isError: '' })
  }

  render() {
    return (
      <>
        <div className="back">
          <div style={{ textAlign: 'center' }}>
            <div style={{ flex: 1, flexDirection: 'row' }}>
              <h2>Apply new leave with Reason</h2>
            </div>

            <br></br><br></br>
            <input type="date" placeholder='Start Date'
              onChange={(event) => this.startfn(event)} />
            <br></br><br></br>
            <input type="date" placeholder='End Date'
              onChange={(event) => this.endfn(event)} />
            <br></br><br></br>
            <textarea rows={6} placeholder='Reason'
              onChange={(event) => this.reasonfn(event)} />
            <br></br><br></br>
            <button className="btn" onClick={this.apply}>Apply leave</button>
            <h1>OR</h1>
            <button onClick={this.showLeave} className="btn">Show Aproved leave</button>

          </div>
        </div>
      </>
    )
  }
}
