import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './googleAuth';

const header = () => (
  <div className="ui secondary pointing menu">
    <Link to="/" className="item">
      StreamLogo
    </Link>
    <div className="right menu">
      <Link to="/" className="item">
        All Streams
      </Link>
      <GoogleAuth />
    </div>
  </div>
);

export default header;
