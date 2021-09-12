import React, { Component } from 'react'
import { apiMethods, apiPaths } from '../common';
import { httpService } from '../servise/httpServise';

class ApprvoveLeave extends Component {

  state = {
    leaveData: '',
  }
  componentDidMount() {
    this.leaves();
  }
  leaves = () => {
    const url = apiPaths.showLeave;
    httpService(url, apiMethods.get)
      .then(data => {
        this.setState({ leaveData: data })
      })
  };

  render() {
    const { leaveData } = this.state;
    return (
      <>
        <div className="back">
          <div style={{ marginTop: '10px', textAlign: 'center' }}>

            {leaveData.length > 0 &&

              <div>
                {leaveData.map((e, i) => (
                  <div style={{ padding: '20px', flex: 1, flexDirection: 'row' }} key={i}>
                    <span >{e.startDate} - {e.endDate} -{e.reason} ---
                      <button className="btn1"
                        onClick={() => this.approve(e)}> approve</button></span>
                  </div>

                ))}
              </div>
            }
          </div>
        </div>
      </>
    )
  }
}
export default ApprvoveLeave;