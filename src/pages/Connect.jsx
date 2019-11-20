import React from 'react';
import connectUrl from '../images/connect.jpg';
class Connect extends React.Component {

  render() {
    return (
      <div className="content-wrap">
        <div className="connect-content">
          <img className="connect-url" src={ connectUrl } alt=""/>
          <div>Hello world</div>
        </div>
      </div>
    );
  }

}

export default Connect
