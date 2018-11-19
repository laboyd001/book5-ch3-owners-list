import React, {Component} from 'react'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"

// Kennel.js is a container component that renders application views.
// It renders no HTML itself, as you'll see. It simply contains other components that actually are responsible for the presentation and behavior of the application. In the case of KennelCompany, it contains two different kinds of components.

export default class Kennel extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    )
  }
}