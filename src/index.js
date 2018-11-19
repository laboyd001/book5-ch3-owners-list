
import React from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter as Router} from "react-router-dom"
import Kennel from "./components/Kennel"

import "./index.css"

// index.js becomes the point of entry component.
// its root component must now be <Router /> which gets imported from the React Router package. In that router, you place the <Kennel /> child component. What this tells React is that "I will be placing Routes in my Kennel component."
// Router is also considered a top level component


ReactDOM.render(
  <Router>
    <Kennel />
  </Router>
  , document.getElementById("root")
)


