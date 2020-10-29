import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Navigation from './navigation/navigation.component'
import Footer from './footer/footer.component'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <Navigation />
        {children}
        <Footer />
      </>
    )
  }
}

export default Template
