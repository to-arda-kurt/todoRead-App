import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/routes';

const Logo = () => (
  <div className="Logo">
    <Link to={HOME.link}>
      <span>todoREAD+</span>
    </Link>
  </div>
);

export default Logo;
