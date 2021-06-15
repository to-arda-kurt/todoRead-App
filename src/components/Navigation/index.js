import React from 'react';
import { HOME, ADDBOOK } from '../../constants/routes';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to={HOME.link}>Read List</Link>
        </li>
        <li>
          <Link to={ADDBOOK.link}>Add Book</Link>
        </li>
        <li>
          <Link to={HOME.link}>Find Book</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
