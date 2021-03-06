
import React, {Component} from 'react'
import {Menu} from './Menu'
import {Footer} from './Footer'

export class BaseLayout extends Component {
  render() {
    return (
      <div id="container">
        <Menu />
        {this.props.children}

      </div>
    );
  }
}
