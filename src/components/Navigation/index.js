import React from 'react';
import { HOME, ADDBOOK, FINDBOOK } from '../../constants/routes';
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
          <Link to={FINDBOOK.link}>Find Book</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
