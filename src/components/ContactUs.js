
import React, {Component} from 'react'
import '../Styles.css'

export class ContactUs extends Component {

  render() {
    return (
      <div className="contact">
          <div>
            <label>Your name:</label><br />
            <input/><br />
          </div>
          <div>
            <label>Your email:</label><br />
            <input/><br />
          </div>
          <div>
            <label>Your message:</label><br />
            <textarea></textarea><br />
          </div>
            <button>Submit</button>
      </div>
    )
  }

}
