import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {status: 'subscribe'}

  btnClick = () => {
    const {status} = this.state
    this.setState(() => ({
      status: status === 'subscribe' ? 'subscribed' : 'subscribe',
    }))
  }

  render() {
    const {status} = this.state
    return (
      <div className="mainBg">
        <h1 className="head">Welcome</h1>
        <h3 className="info">Thank you! Happy Learning</h3>
        <button className="btn" type="submit" onClick={this.btnClick}>
          {status}
        </button>
      </div>
    )
  }
}
export default Welcome
