import React from 'react';

// core components
import ColorNavbar from 'components/Navbars/ColorNavbar.js';
import DemoFooter from 'components/Footers/DemoFooter.js';

class BaseLayout extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    return (
      <>
        <ColorNavbar />
        <div className="wrapper">
          {children}
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default BaseLayout;
