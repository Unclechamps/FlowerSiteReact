
import React, {Component} from 'react'
import '../Styles.css'
import {NavLink} from 'react-router-dom'
// import {NavLink} from 'react-router-dom'

// Link does not put a default style on the anchor tags
import {Link} from 'react-router-dom'

export class Menu extends Component {

  render() {
    return (
      <div className="menu">
        <div><NavLink exact to = "/">Home</NavLink></div>
        <div><NavLink to = "/addflowers">Add Flowers</NavLink></div>
        <div><NavLink to = "/contact-us">Contact Us</NavLink></div>
      </div>
    )
  }

}
